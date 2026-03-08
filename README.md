
# Personal Website

This repository contains the source code for my personal website, hosted using **GitHub Pages**.

🌐 **Live Site:**
[https://finn-2005.github.io/](https://finn-2005.github.io/)

The website acts as a hub for projects, experiments, and interactive technical explanations.

---

# Website Structure

The site currently contains three main parts:

1. **Portfolio** – Main landing page linking to projects
2. **SimLab** – Interactive blog explaining game development concepts
3. **KCC Student Portal** – A static student dashboard interface

---

# Portfolio

The main entry page of the website is:

```
/portfolio.html
```

This page serves as a central hub linking to projects, experiments, and tools hosted on the website.

---

# SimLab

**SimLab** is an interactive blog focused on explaining foundational concepts used in **game development, physics simulation, and rendering**.

Each article includes an **interactive canvas simulation** so readers can visually explore how the systems work.

### Topics currently covered

* Vector math and the **dot product**
* Spring physics and oscillation
* The classic **game loop architecture**

### Live Demo

```
https://finn-2005.github.io/simlab/
```

---

# KCC Student Portal

The **KCC Student Portal** is a fully static student dashboard interface designed to simulate a college portal experience.

It is built entirely with **HTML, CSS, and JavaScript**, making it deployable directly on **GitHub Pages without any backend**.

### Features

* ✅ 100% Static – No backend required
* ✅ Responsive design (desktop, tablet, mobile)
* ✅ Dark/Light mode with localStorage persistence
* ✅ Modern UI built with **Tailwind CSS** and **DaisyUI**
* ✅ Fast and lightweight

### Pages Included

* **Dashboard** – Overview of notices, assignments, and events
* **Notices** – College announcements
* **Assignments** – Coursework tracking
* **Timetable** – Class schedule
* **Events** – Upcoming college events
* **Documents** – Course materials and resources

### Project Location

```
/kcc-student-portal
```

---

# Static vs Full-Stack Version (SimLab)

The version deployed on GitHub Pages has been **modified to work as a static site**, since GitHub Pages cannot run backend frameworks.

The original **full-stack version** of SimLab is included in:

```
simlab/_full_stack
```

The static version removes the **FastAPI backend and Jinja templating**, allowing the site to run entirely from static files.

---

# Running the Full-Stack Version (SimLab)

To run the original FastAPI application locally:

### 1. Install Python

Python **3.10+** is recommended.

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

### Frontend

* HTML
* CSS
* JavaScript
* Tailwind CSS
* DaisyUI
* p5.js (for simulations)

### Backend (Full-Stack SimLab Version)

* FastAPI
* Jinja templating

### Hosting

* GitHub Pages

---

# Purpose

This website serves as a place to:

* Experiment with **interactive technical explanations**
* Explore **game development concepts**
* Build **useful web tools and interfaces**
* Document personal projects and experiments
