from pydantic import BaseModel

class Deck(BaseModel):
    title: str
    description: str
    color: str