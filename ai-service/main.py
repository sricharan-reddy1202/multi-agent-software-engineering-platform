from fastapi import FastAPI
from models.planner_request import PlannerRequest
from workflows.workflow import workflow

app = FastAPI()
@app.post("/workflow")
def run_workflow(request: PlannerRequest):

    print("=" * 50)
    print("WORKFLOW STARTED")
    print("=" * 50)

    result = workflow.invoke(
        {
            "requirement": request.requirement
        }
    )

    print("=" * 50)
    print("WORKFLOW COMPLETED")
    print("=" * 50)

    return {
        "plan": result["plan"],
        "code": result["code"],
        "review": result["review"],
        "score": result["score"]
    }