# models.py

from pydantic import BaseModel
from datetime import date


class Student(BaseModel):
    id: int
    name: str
    email: str
    course: str
    semester: int


class Notice(BaseModel):
    id: int
    title: str
    content: str
    date: date


class Assignment(BaseModel):
    id: int
    title: str
    subject: str
    due_date: date
    description: str


class TimetableEntry(BaseModel):
    id: int
    day: str
    subject: str
    start_time: str
    end_time: str
    room: str


class Document(BaseModel):
    id: int
    title: str
    file_url: str
    uploaded_at: date