# routers/assignments.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter(prefix="/assignments", tags=["Assignments"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def assignments_page(request: Request):
    assignments = load_data("assignments.json")

    return templates.TemplateResponse(
        "assignments.html",
        {
            "request": request,
            "assignments": assignments
        }
    )