try:
    import jwt
except ImportError:
    from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "studymate_secret_key"
ALGORITHM = "HS256"

def create_access_token(user_id: int): 
    payload = { 
        "user_id": user_id, 
        "exp": datetime.utcnow() + timedelta(days=1) 
    }

    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

    return token
