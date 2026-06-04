from langgraph.graph import (
    StateGraph,
    END
)

from workflows.state import AgentState

from agents.planner import planner_agent
from agents.coder import coder_agent
from agents.reviewer import reviewer_agent
from workflows.router import review_router
graph = StateGraph(AgentState)

graph.add_node(
    "planner",
    planner_agent
)

graph.add_node(
    "coder",
    coder_agent
)

graph.add_node(
    "reviewer",
    reviewer_agent
)

graph.set_entry_point(
    "planner"
)

graph.add_edge(
    "planner",
    "coder"
)

graph.add_edge(
    "coder",
    "reviewer"
)
graph.add_conditional_edges(
    "reviewer",
    review_router,
    {
        "approved": END,
        "rework": "coder"
    }
)

workflow = graph.compile()