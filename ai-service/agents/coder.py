from services.ollama_service import ask_llm

def coder_agent(state):
    print("Coder Started")

    plan = state["plan"]

    prompt = f"""
You are a Senior Software Engineer.

Based on this software plan:

{plan}

Generate:

1. Database Design
2. API Design
3. Folder Structure
4. Implementation Strategy

Be practical and concise.
"""

    code_output = ask_llm(prompt)

    state["code"] = code_output
    print("Coder Completed")

    return state
