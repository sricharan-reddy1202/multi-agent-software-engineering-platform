def review_router(state):

    if state["score"] >= 8:
        return "approved"

    return "rework"