from typing import TypedDict

class AgentState(TypedDict):
    requirement: str
    plan: str
    code: str
    review: str
    score: int