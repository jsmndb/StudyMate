from fastapi import APIRouter
from database import get_db_connection
from models.flashcard import Flashcard

router = APIRouter()


@router.post("/flashcards/{deck_id}")
def create_flashcard(deck_id: int, flashcard: Flashcard):

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO flashcards
        (question, answer, deck_id)
        VALUES(%s,%s,%s)
        """,
        (
            flashcard.question,
            flashcard.answer,
            deck_id
        )
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Flashcard created successfully"
    }