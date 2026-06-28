from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from routes.auth import router as auth_router
from auth_middleware import verify_token
from routes.deck import router as deck_router
from routes.flashcard import router as flashcard_router

app = FastAPI()

# Allow React frontend to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(deck_router)
app.include_router(flashcard_router)

@app.get("/")
def home():
    return {"message": "StudyMate API is running"}


@app.get("/profile")
def profile(payload=Depends(verify_token)):
    return {
        "message": "Welcome back!",
        "user_id": payload["user_id"],
    }