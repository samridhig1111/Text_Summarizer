from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline

# Create the FastAPI app
app = FastAPI()

# Allow frontend (React app) to connect to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with ["http://localhost:3000"] for stricter security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the Hugging Face summarization model
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# Define the input data format using Pydantic
class TextIn(BaseModel):
    text: str

# Define the summarization endpoint
@app.post("/summarize")
def summarize_text(item: TextIn):
    print("Received input:", item.text)
    result = summarizer(item.text, max_length=80, min_length=20, do_sample=False)
    return {"summary": result[0]["summary_text"]}
