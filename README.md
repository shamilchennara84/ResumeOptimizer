# Resume Optimizer

A comprehensive application for optimizing resumes using AI.

## Project Structure

- `frontend/`: Angular application for the user interface.
- `backend/`: NestJS server for core business logic and API.
- `ai-service/`: FastAPI microservice for AI-related tasks (LangChain/Gemini).
- `docker-compose.yml`: Docker configuration for the entire system.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local development)
- [Python 3.13+](https://www.python.org/) (for local ai-service development)

### Local Development

#### 1. Setup Environment
Create a `.env` file in the root and add necessary configuration from `.env.example` (yet to be created).

#### 2. Run with Docker Compose
```bash
docker-compose up --build
```

#### 3. AI Service (Python)
```bash
cd ai-service
# Create venv
python -m venv venv
# Activate venv (Windows)
.\venv\Scripts\activate
# Install deps
pip install -r requirements.txt
# Run service
uvicorn main:app --reload
```

## Contributing
Please follow the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture for frontend/backend components where applicable.
