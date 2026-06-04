from pydantic import BaseModel

class PlannerRequest(BaseModel):
    requirement: str