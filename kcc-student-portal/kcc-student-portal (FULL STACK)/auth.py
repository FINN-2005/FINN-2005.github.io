# auth.py

from fastapi import APIRouter, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")


# Fake login for now (no real authentication)
@router.get("/login")
async def login_page(request: Request):
    return templates.TemplateResponse(
        "login.html",
        {"request": request}
    )


@router.post("/login")
async def login(username: str = Form(...), password: str = Form(...)):
    # In real system you would validate against database
    # For now accept anything
    return RedirectResponse("/dashboard", status_code=303)


@router.get("/logout")
async def logout():
    return RedirectResponse("/login", status_code=303)