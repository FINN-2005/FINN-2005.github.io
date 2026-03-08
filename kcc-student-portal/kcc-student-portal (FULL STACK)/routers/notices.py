# routers/notices.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter(prefix="/notices", tags=["Notices"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def notices_page(request: Request):
    notices = load_data("notices.json")

    return templates.TemplateResponse(
        "notices.html",
        {
            "request": request,
            "notices": notices
        }
    )