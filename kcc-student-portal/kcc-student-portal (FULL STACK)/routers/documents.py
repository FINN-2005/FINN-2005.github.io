# routers/documents.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from database import load_data

router = APIRouter(prefix="/documents", tags=["Documents"])
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def documents_page(request: Request):
    documents = load_data("documents.json")

    return templates.TemplateResponse(
        "documents.html",
        {
            "request": request,
            "documents": documents
        }
    )