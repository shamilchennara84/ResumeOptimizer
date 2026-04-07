from fastapi import FastAPI

app = FastAPI(
    title="Resume Optimizer AI Service",
    description="Microservice for handling LangChain and Gemini API integrations.",
    version="1.0.0"
)

@app.get("/health")
def health_check():
    return {"status": "healthy"}
