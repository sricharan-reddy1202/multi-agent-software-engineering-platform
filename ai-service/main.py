from fastapi import FastAPI
from models.planner_request import PlannerRequest
from agents.planner import planner_agent

app = FastAPI()

@app.get("/")
def root():
    return {
        "message": "AI Service Running"
    }

@app.post("/planner")
def generate_plan(request: PlannerRequest):

    plan = planner_agent(
        request.requirement
    )

    return {
        "plan": plan
    }