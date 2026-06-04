from services.ollama_service import ask_llm

response = ask_llm(
    "Explain JWT authentication in 3 points."
)

print(response)
