# routers/events.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter(prefix="/events", tags=["Events"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def events_page(request: Request):
    events = load_data("events.json")
    # Sort by date (earliest first)
    events.sort(key=lambda x: x["date"])

    return templates.TemplateResponse(
        "events.html",
        {
            "request": request,
            "events": events
        }
    )
