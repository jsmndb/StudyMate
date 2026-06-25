from dataclasses import dataclass

@dataclass
class UserLogin:
    email: str
    password: str