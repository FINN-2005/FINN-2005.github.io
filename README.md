# Personal Website

This repository contains the source code for my personal website, hosted using GitHub Pages.

Live site:
https://finn-2005.github.io/

The site currently contains two main parts:

* **Portfolio page** – a simple landing page linking to projects
* **SimLab** – an interactive blog explaining core game development concepts through simulations

---

# Portfolio

The main entry page of the site is:

```
/portfolio.html
```

This page acts as a central hub linking to projects and experiments hosted on the website.

---

# SimLab

SimLab is an interactive blog focused on explaining foundational concepts used in game development.

Each article includes an interactive canvas where the behavior of a system can be explored visually.

Topics currently covered:

* Vector math and the dot product
* Spring physics and oscillation
* The classic game loop architecture

Live demo:

```
https://finn-2005.github.io/simlab/
```

---

# Static vs Full-Stack Version

The version deployed on GitHub Pages has been **modified to work as a static site**, since GitHub Pages cannot run backend frameworks.

The original **full stack application** is included in:

`simlab/_full_stack`

The static version removes the FastAPI backend and Jinja templating so the site can run entirely from static files.

---

# Running the Full Stack Version

To run the original FastAPI application locally:

### 1. Install Python

Python 3.10+ is recommended.

### 2. Install dependencies

```
pip install fastapi uvicorn jinja2 python-multipart
```

### 3. Start the server

From the `_full_stack` directory:

```
uvicorn main:app --reload
```

### 4. Open in browser

```
http://127.0.0.1:8000
```

---

# Technologies Used

Frontend

* HTML
* CSS
* JavaScript
* p5.js (for simulations)

Backend (full stack version)

* FastAPI
* Jinja templating

Hosting

* GitHub Pages

---

# Purpose

This website serves as a place to experiment with interactive explanations of technical topics, especially in areas related to game development, physics simulation, and rendering concepts.
