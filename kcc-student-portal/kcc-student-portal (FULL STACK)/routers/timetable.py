# routers/timetable.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter(prefix="/timetable", tags=["Timetable"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def timetable_page(request: Request):
    timetable = load_data("timetable.json")

    return templates.TemplateResponse(
        "timetable.html",
        {
            "request": request,
            "timetable": timetable
        }
    )