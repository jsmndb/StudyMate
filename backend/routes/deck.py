from fastapi import APIRouter, Depends
from database import get_db_connection
from auth_middleware import verify_token
from models.deck import Deck

router = APIRouter()


@router.post("/decks")
def create_deck(deck: Deck, payload=Depends(verify_token)):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO decks
        (title, description, color, user_id)
        VALUES (%s, %s, %s, %s)
        """,
        (
            deck.title,
            deck.description,
            deck.color,
            payload["user_id"]
        )
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Deck created successfully"
    }

@router.get("/decks")
def get_decks(payload=Depends(verify_token)):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT *
        FROM decks
        WHERE user_id = %s
        ORDER BY created_at DESC
        """,
        (payload["user_id"],)
    )

    decks = cursor.fetchall()

    cursor.close()
    conn.close()

    return decks