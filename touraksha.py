import os
import json
from datetime import datetime
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_tavily import TavilySearch
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain.prompts import ChatPromptTemplate
from langchain.tools import Tool
from langsmith import Client
from langchain.callbacks import LangChainTracer

class TravelSafetyAgent:
    def __init__(self):
        # API Keys
        self.gemini_api_key = "AIzaSyDPocNInT3OEzdPhoWZYgklH3gSRvMJIjc"  # Replace with your actual API key
        self.tavily_api_key = "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"  # Replace with your actual Tavily API key
        self.langsmith_api_key = "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"  # Replace with your actual LangSmith API key
        
        self.setup_langsmith()
        self.setup_agent()
    
    def setup_langsmith(self):
        """Setup LangSmith for monitoring and tracing"""
        try:
            if self.langsmith_api_key and self.langsmith_api_key != "your_langsmith_api_key_here":
                # Set environment variables for LangSmith
                os.environ["LANGCHAIN_API_KEY"] = self.langsmith_api_key
                os.environ["LANGCHAIN_TRACING_V2"] = "true"
                os.environ["LANGCHAIN_PROJECT"] = "travel-safety-agent"
                
                # Initialize LangSmith client
                self.langsmith_client = Client(api_key=self.langsmith_api_key)
                self.tracer = LangChainTracer(project_name="travel-safety-agent")
                
                self.langsmith_enabled = True
            else:
                self.langsmith_enabled = False
                self.tracer = None
        except Exception as e:
            self.langsmith_enabled = False
            self.tracer = None
    
    def setup_agent(self):
        """Setup the LangChain agent"""
        # Initialize LLM
        self.llm = ChatGoogleGenerativeAI(
            model="gemini-1.5-flash",
            google_api_key=self.gemini_api_key,
            temperature=0.1
        )
        
        # Setup tools
        self.tools = []
        
        # Web search tool
        if self.tavily_api_key and self.tavily_api_key != "your_tavily_api_key_here":
            self.tavily_tool = TavilySearch(
                tavily_api_key=self.tavily_api_key,
                search_depth="advanced",
                max_results=5
            )
            self.tools.append(self.tavily_tool)
        
        # Create prompt
        self.prompt = ChatPromptTemplate.from_messages([
            ("system", """You are a professional travel safety expert. Provide comprehensive travel safety information for any destination worldwide.

IMPORTANT: Always respond with valid JSON format. Use this exact structure:

{{
  "destination": "City Name",
  "safety_score": 8.5,
  "safe_areas": ["Area 1", "Area 2", "Area 3"],
  "avoid_areas": ["Area to avoid 1", "Area to avoid 2"],
  "tourist_attractions": ["Attraction 1", "Attraction 2", "Attraction 3"],
  "emergency_numbers": {{
    "Police": "123",
    "Medical": "456",
    "Fire": "789"
  }},
  "safety_tips": ["Tip 1", "Tip 2", "Tip 3"],
  "best_months": ["Month 1", "Month 2", "Month 3"],
  "hotels": [
    {{
      "name": "Hotel Name",
      "price": 150,
      "rating": 4.5,
      "type": "Luxury"
    }}
  ],
  "weather_info": {{
    "current_condition": "Sunny",
    "temperature": "25°C",
    "humidity": "60%"
  }},
  "last_updated": "2024-01-01T12:00:00Z"
}}

When asked about a destination:
1. Search for current travel safety information
2. Fill in the JSON structure with accurate data
3. Use current, official information from government travel advisories
4. Always return valid JSON - no additional text outside the JSON structure"""),
            ("human", "{input}"),
            ("placeholder", "{agent_scratchpad}")
        ])
        
        # Create agent
        self.agent = create_tool_calling_agent(self.llm, self.tools, self.prompt)
        
        # Add LangSmith tracing if enabled
        callbacks = [self.tracer] if self.langsmith_enabled and self.tracer else []
        
        self.agent_executor = AgentExecutor(
            agent=self.agent, 
            tools=self.tools, 
            verbose=False,
            callbacks=callbacks
        )
    
    def parse_json_response(self, response_text: str) -> dict:
        """Parse and validate JSON response from the agent"""
        try:
            # Try to extract JSON from the response
            # Look for JSON between curly braces
            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1
            
            if start_idx != -1 and end_idx != -1:
                json_str = response_text[start_idx:end_idx]
                parsed_json = json.loads(json_str)
                return parsed_json
            else:
                # If no JSON found, create a fallback structure
                return self.create_fallback_json(response_text)
                
        except json.JSONDecodeError as e:
            return self.create_fallback_json(response_text)
        except Exception as e:
            return self.create_fallback_json(response_text)
    
    def create_fallback_json(self, response_text: str) -> dict:
        """Create a fallback JSON structure when parsing fails"""
        return {
            "destination": "Unknown",
            "safety_score": 7.0,
            "safe_areas": ["City center", "Tourist areas"],
            "avoid_areas": ["Isolated areas at night"],
            "tourist_attractions": ["Main attractions"],
            "emergency_numbers": {
                "Police": "Local emergency",
                "Medical": "Local medical"
            },
            "safety_tips": ["Stay aware of surroundings", "Keep valuables secure"],
            "best_months": ["Spring", "Fall"],
            "hotels": [
                {
                    "name": "Sample Hotel",
                    "price": 100,
                    "rating": 4.0,
                    "type": "Standard"
                }
            ],
            "weather_info": {
                "current_condition": "Unknown",
                "temperature": "N/A",
                "humidity": "N/A"
            },
            "last_updated": datetime.now().isoformat(),
            "raw_response": response_text[:500] + "..." if len(response_text) > 500 else response_text
        }
    
    
    def search_destination(self, destination: str) -> str:
        """Search for destination information using the agent"""
        try:
            result = self.agent_executor.invoke({
                "input": f"Provide comprehensive travel safety information for {destination} in JSON format. Include safety score, safe areas, areas to avoid, tourist attractions, emergency numbers, safety tips, best months to visit, hotel recommendations, and current weather information."
            })
            
            # Parse the JSON response
            json_data = self.parse_json_response(result["output"])
            
            # Return the JSON data directly (no formatting for frontend)
            return json.dumps(json_data, indent=2, ensure_ascii=False)
            
        except Exception as e:
            return json.dumps({"error": str(e)}, indent=2)
    
    def chat_with_ai(self, message: str) -> str:
        """Chat with the AI about travel safety"""
        try:
            result = self.agent_executor.invoke({"input": message})
            
            # Check if the response contains JSON
            response_text = result["output"]
            if '{' in response_text and '}' in response_text:
                # Try to parse as JSON
                json_data = self.parse_json_response(response_text)
                return json.dumps(json_data, indent=2, ensure_ascii=False)
            else:
                # Return as regular text in JSON format
                return json.dumps({"response": response_text}, indent=2, ensure_ascii=False)
                
        except Exception as e:
            return json.dumps({"error": str(e)}, indent=2)
    
    def run(self):
        """Main application loop - simplified for frontend integration"""
        while True:
            print(f"\n{'='*50}")
            print("AI TRAVEL SAFETY AGENT - API MODE")
            print(f"{'='*50}")
            print("1. Search Destination")
            print("2. Chat with AI")
            print("3. Exit")
            print(f"{'='*50}")
            
            choice = input("\nEnter your choice (1-3): ").strip()
            
            if choice == "1":
                destination = input("Enter destination: ").strip()
                if destination:
                    result = self.search_destination(destination)
                    print(f"\n{result}")
                    
            elif choice == "2":
                message = input("Ask me anything about travel safety: ").strip()
                if message:
                    response = self.chat_with_ai(message)
                    print(f"\n{response}")
                    
            elif choice == "3":
                print("Thank you for using AI Travel Safety Agent!")
                break
                
            else:
                print("Invalid choice. Please try again.")
    
    def get_destination_info(self, destination: str) -> dict:
        """API method for frontend integration - returns dict instead of string"""
        try:
            result = self.agent_executor.invoke({
                "input": f"Provide comprehensive travel safety information for {destination} in JSON format. Include safety score, safe areas, areas to avoid, tourist attractions, emergency numbers, safety tips, best months to visit, hotel recommendations, and current weather information."
            })
            
            # Parse the JSON response
            json_data = self.parse_json_response(result["output"])
            return json_data
            
        except Exception as e:
            return {"error": str(e)}
    
    def get_chat_response(self, message: str) -> dict:
        """API method for frontend integration - returns dict instead of string"""
        try:
            result = self.agent_executor.invoke({"input": message})
            
            # Check if the response contains JSON
            response_text = result["output"]
            if '{' in response_text and '}' in response_text:
                # Try to parse as JSON
                json_data = self.parse_json_response(response_text)
                return json_data
            else:
                # Return as regular text in JSON format
                return {"response": response_text}
                
        except Exception as e:
            return {"error": str(e)}

def main():
    app = TravelSafetyAgent()
    app.run()

if __name__ == "__main__":
    main()
