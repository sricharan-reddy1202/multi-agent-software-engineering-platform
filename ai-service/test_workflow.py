from workflows.workflow import workflow

result = workflow.invoke(
    {
        "requirement":
        """
        Build an Inventory
        Management System
        with JWT Authentication
        and Role Based Access Control
        """
    }
)

print(result)