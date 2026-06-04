from services.ollama_service import ask_llm

def planner_agent(state):
    print("Planner Started")

    requirement = state["requirement"]

    prompt = f"""
You are a Senior Software Architect.

Create a structured software plan.

Requirement:
{requirement}
"""

    plan = ask_llm(prompt)

    state["plan"] = plan
    
    print("Planner Completed")

    return state
