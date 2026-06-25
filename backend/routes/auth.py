from fastapi import APIRouter
from models.user import UserRegister
from database import get_db_connection

router = APIRouter()

@router.post("/register")
def register(user: UserRegister):
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    INSERT INTO users (name, email, password)
    VALUES (%s, %s, %s)
    """

    values = (
        user.name,
        user.email,
        user.password
    )

    cursor.execute(query, values)
    conn.commit()

    cursor.close()
    conn.close()

    return {"message": "User registered successfully"}