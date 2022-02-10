from typing import Any, Dict, List
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from src.questions import questions

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


@app.get("/", status_code=status.HTTP_200_OK)
def read_welcome():
    return {"message": "Welcome to personality test API"}


@app.get("/questions", status_code=status.HTTP_200_OK)
def get_question():
    questions_data = jsonable_encoder(questions)
    return JSONResponse(
        content={"data": questions_data, "total_questions": len(questions_data)}
    )


@app.get("/questions/<:id>", status_code=status.HTTP_200_OK)
def get_question_by_id(id: int):
    res = {}
    question_length = len(questions)
    if id <= question_length and id > 0:
        question = questions[id - 1]
        questions_data = jsonable_encoder(question)
        res["data"] = questions_data
    else:
        res["data"] = []

    return JSONResponse(content=res)
