from fastapi import FastAPI, Depends
from routes.auth import router as auth_router
from auth_middleware import verify_token

app = FastAPI()

app.include_router(auth_router)

@app.get("/")
def home():
    return {"message": "StudyMate API is running"}

@app.get("/profile")
def profile(payload=Depends(verify_token)):
    return {
        "message": "Welcome back!",
        "user_id": payload["user_id"]
    }

