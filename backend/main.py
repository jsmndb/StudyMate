from fastapi import FastAPI
from database import get_db_connection

app = FastAPI()

@app.get("/")
def home():
    return {"message": "StudyMate API is running"}

@app.get("/test-db")
def test_db():
    try:
        conn = get_db_connection()
        conn.close()
        return {"message": "Database connected successfully"}
    except Exception as e:
        return {"error": str(e)}