# KCC Student Portal

A lightweight **student portal prototype** built using **FastAPI + Jinja + TailwindCSS (DaisyUI)**.

The goal of this project is to provide a **modern, clean, and functional student portal interface** for KCC that can later be expanded into a full institutional system.

---

## Features

- Student Dashboard
- Notices system
- Timetable viewer
- Assignments tracker
- Documents download section
- Clean modern UI using Tailwind + DaisyUI
- Lightweight backend using FastAPI
- JSON-based storage (no database setup required)

---

## Tech Stack

Backend
- FastAPI
- Jinja2 templates
- Pydantic

Frontend
- TailwindCSS
- DaisyUI

Data
- JSON files (temporary storage)

---

## Project Structure  
Here’s the **properly formatted Markdown version** using a code block so it renders correctly:  
  
kcc-student-portal/  
│  
├── main.py  
├── database.py  
├── models.py  
├── auth.py  
├── config.py  
│  
├── routers/  
│   ├── dashboard.py  
│   ├── notices.py  
│   ├── timetable.py  
│   ├── assignments.py  
│   └── documents.py  
│  
├── templates/  
│   ├── base.html  
│   ├── login.html  
│   ├── dashboard.html  
│   ├── notices.html  
│   ├── timetable.html  
│   ├── assignments.html  
│   └── documents.html  
│  
├── static/  
│   ├── css/  
│   │   └── styles.css  
│   └── js/  
│       └── main.js  
│  
├── data/  
│   ├── notices.json  
│   ├── timetable.json  
│   └── assignments.json  
│  
├── requirements.txt  
├── .env  
└── README.md  

---

## Installation

1. Clone the repository
```bash
git clone <repo-url> cd kcc-student-portal
```
2. Create a virtual environment
```python
python -m venv venv source venv/bin/activate
```
3. Install dependencies
```bash
pip install -r requirements.txt
```
---

## Run the Server
```bash
uvicorn main:app --reload
```
## Open in browser
```bash
http://127.0.0.1:8000
```
---

## Future Improvements

- Real authentication system
- Database integration (PostgreSQL)
- Role-based access control
- Student profile management
- Assignment submissions
- File uploads for documents
- Admin dashboard
- Notifications system
- API endpoints for mobile apps

---

## Notes

This portal is currently a **prototype** designed to demonstrate:

- modern UI
- clear structure
- maintainable architecture

It can later be expanded into a **full student management system**.