# main.py

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from routers import dashboard, notices, timetable, assignments, documents, events
from auth import router as auth_router

app = FastAPI(title="KCC Student Portal")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Jinja templates
templates = Jinja2Templates(directory="templates")

# Include routers
app.include_router(auth_router)
app.include_router(dashboard.router)
app.include_router(notices.router)
app.include_router(timetable.router)
app.include_router(assignments.router)
app.include_router(documents.router)
app.include_router(events.router)


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse(
        "login.html",
        {"request": request}
    )