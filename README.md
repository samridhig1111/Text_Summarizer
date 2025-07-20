A simple full stack app using React.js for the frontend and "FastAPI and HuggingFace Transformers" on the backend to summarize long text.

## How to run locally
1. Create a virtual environment and activate it.
2. Install dependencies : pip install fastapi uvicorn transformers torch
3. Run the server : uvicorn main:app --reload
4. Navigate to the frontend folder
5. Install dependencies
6. Run the app


## Languages & Technologies Used
 Python – for backend (FastAPI + Hugging Face Transformers)

 React.js – for frontend UI

 Axios – for frontend-backend communication

 Uvicorn – ASGI server for running FastAPI

 Transformers – pre-trained model (facebook/bart-large-cnn) for text summarization





Note : The summarizer currently supports inputs up to approximately **1024 tokens** (roughly ~750–800 words)
