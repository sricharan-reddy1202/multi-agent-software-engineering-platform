from services.ollama_service import ask_llm

def reviewer_agent(state):
    print("Reviewer Started")

    prompt = f"""
You are a Senior Software Architect.

Review the following plan
and implementation strategy.

Plan:
{state['plan']}

Implementation:
{state['code']}

Provide:

1. Strengths
2. Weaknesses
3. Missing Components
4. Recommendations
"""

    review = ask_llm(prompt)
    state["review"] = review
    if "8/10" in review:
        state["score"] = 8
    else:
        state["score"] = 6
    print("Reviewer Completed")
    return state
