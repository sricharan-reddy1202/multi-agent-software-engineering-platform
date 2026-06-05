┌──────────────────────────────────────────┐
│              React Frontend              │
│──────────────────────────────────────────│
│ • Login Page                             │
│ • Register Page                          │
│ • Dashboard                              │
│ • Projects                               │
│ • Requirements                           │
│ • Workflow Results                       │
└──────────────────┬───────────────────────┘
                   │
                   │ HTTP / Axios
                   ▼

┌──────────────────────────────────────────┐
│          Node.js Backend (Express)       │
│──────────────────────────────────────────│
│ • JWT Authentication                     │
│ • Project APIs                           │
│ • Requirement APIs                       │
│ • Dashboard APIs                         │
│ • Workflow APIs                          │
└───────────────┬───────────────┬──────────┘
                │               │
                │               │
                ▼               ▼

┌────────────────────┐   ┌───────────────────┐
│      MongoDB       │   │  FastAPI Service  │
│────────────────────│   │───────────────────│
│ • Users            │   │ • /planner        │
│ • Projects         │   │ • /workflow       │
│ • Requirements     │   └─────────┬─────────┘
│ • Workflow Output  │             │
└────────────────────┘             │
                                   ▼

                    ┌─────────────────────────┐
                    │    LangGraph Workflow   │
                    └───────────┬─────────────┘
                                │
                                ▼

                    ┌─────────────────────────┐
                    │      Planner Agent      │
                    │─────────────────────────│
                    │ Requirement Analysis    │
                    │ Software Planning       │
                    └───────────┬─────────────┘
                                │
                                ▼

                    ┌─────────────────────────┐
                    │       Coder Agent       │
                    │─────────────────────────│
                    │ Code Generation         │
                    │ Implementation Strategy │
                    └───────────┬─────────────┘
                                │
                                ▼

                    ┌─────────────────────────┐
                    │     Reviewer Agent      │
                    │─────────────────────────│
                    │ Review Code             │
                    │ Assign Score            │
                    └───────────┬─────────────┘
                                │
                                ▼

                    ┌─────────────────────────┐
                    │      Ollama + Qwen      │
                    │─────────────────────────│
                    │ Local LLM Execution     │
                    └─────────────────────────┘