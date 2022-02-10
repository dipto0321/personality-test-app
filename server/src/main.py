from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

description = """
Personality test API helps you to generate your personality. 🚀
"""

app = FastAPI(
    title="Personality Test",
    description=description,
    version="0.0.1",
    contact={
        "name": "Dipto Karmakar",
        "url": "https://diptokarmakar.me/",
        "email": "diptokmk47@gmail.com",
    },
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_welcome():
    return {"message": "Welcome to personality test API"}
