from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import csv
import os

app = FastAPI()

# Static files
app.mount("/css", StaticFiles(directory="css"), name="css")
app.mount("/assets", StaticFiles(directory="assets"), name="assets")

# Templates
templates = Jinja2Templates(directory="templates")


# -------------------------
# MAIN PAGES
# -------------------------

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})


@app.get("/contact", response_class=HTMLResponse)
async def contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


# -------------------------
# BLOG ROUTES
# -------------------------

@app.get("/blogs/vector", response_class=HTMLResponse)
async def vector_blog(request: Request):
    return templates.TemplateResponse("blogs/vector.html", {"request": request})


@app.get("/blogs/spring", response_class=HTMLResponse)
async def spring_blog(request: Request):
    return templates.TemplateResponse("blogs/spring.html", {"request": request})


@app.get("/blogs/gameloop", response_class=HTMLResponse)
async def gameloop_blog(request: Request):
    return templates.TemplateResponse("blogs/gameloop.html", {"request": request})


# -------------------------
# CONTACT FORM
# -------------------------

@app.post("/submit", response_class=HTMLResponse)
async def submit(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):

    file_exists = os.path.isfile("contacts.csv")

    with open("contacts.csv", "a", newline="") as f:
        writer = csv.writer(f)

        if not file_exists:
            writer.writerow(["Name", "Email", "Message"])

        writer.writerow([name, email, message])

    return templates.TemplateResponse(
        "contact.html",
        {"request": request, "success": True}
    )