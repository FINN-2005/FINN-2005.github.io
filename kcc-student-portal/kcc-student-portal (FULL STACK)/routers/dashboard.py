# routers/dashboard.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter()
templates = Jinja2Templates(directory="templates")


@router.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    notices = load_data("notices.json")[:3]
    assignments = load_data("assignments.json")[:3]
    timetable = load_data("timetable.json")[:3]
    events = load_data("events.json")[:3]

    return templates.TemplateResponse(
        "dashboard.html",
        {
            "request": request,
            "notices": notices,
            "assignments": assignments,
            "timetable": timetable,
            "events": events,
        },
    )