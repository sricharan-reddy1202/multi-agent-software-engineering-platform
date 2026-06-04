import os
from dotenv import load_dotenv
from langchain_ollama import ChatOllama

load_dotenv()

llm = ChatOllama(
    model=os.getenv("OLLAMA_MODEL")
)
def ask_llm(prompt: str):

    try:

        response = llm.invoke(prompt)

        return response.content

    except Exception as e:

        return f"LLM Error: {str(e)}"