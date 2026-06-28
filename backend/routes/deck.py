from fastapi import APIRouter, Depends

from database import get_db_connection
from auth_middleware import verify_token
from models.deck import Deck

router = APIRouter()