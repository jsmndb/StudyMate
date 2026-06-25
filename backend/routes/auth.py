from fastapi import APIRouter  # type: ignore[reportMissingImports]
from models.user import UserRegister
from models.login import UserLogin
from database import get_db_connection

router = APIRouter()

@router.post("/register")
def register(user: UserRegister):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email = %s",
        (user.email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        conn.close()
        return {"message": "Email already exists"}

    cursor.execute(
        """
        INSERT INTO users (name, email, password)
        VALUES (%s, %s, %s)
        """,
        (user.name, user.email, user.password)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: UserLogin):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT * FROM users
        WHERE email = %s
        AND password = %s
        """,
        (user.email, user.password)
    )

    found_user = cursor.fetchone()

    cursor.close()
    conn.close()

    if not found_user:
        return {"message": "Invalid email or password"}

    return {
        "message": "Login successful",
        "user": {
            "id": found_user["id"],
            "name": found_user["name"],
            "email": found_user["email"]
        }
    }