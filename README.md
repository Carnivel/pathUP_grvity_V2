# PathUp

### Where Potential Meets Opportunity

PathUp is an education discovery platform that helps higher secondary students explore colleges, courses, universities, entrance exams, and career opportunities through intelligent search and data-driven insights.

**Official Website:** pathup.in

---

## 📖 Overview

Choosing the right college and course can be overwhelming due to the large amount of scattered information available online. PathUp aims to simplify this process by providing a centralized platform where students can discover, compare, and explore educational opportunities.

The platform is designed with scalability, performance, and searchability in mind, leveraging modern technologies such as Django, Next.js, MySQL, Redis, Celery, and Meilisearch.

---

## ✨ Features

### Current Features

* College Discovery
* Course Discovery
* University Discovery
* Entrance Exam Information
* Career Exploration
* College Comparison Tool
* Advanced Search
* Dynamic Content Pages
* SEO-Friendly Architecture
* High-Speed Search with Meilisearch
* Background Processing with Celery
* Redis-Based Caching

### Planned Features

* AI Career Recommendations
* Ranking System
* Scholarship Discovery
* Personalized Recommendations
* Mobile Application

---

## 🏗 Architecture

```text
User
 │
 ▼
Next.js Frontend
 │
 ▼
Django REST API
 │
 ├───────────────┐
 │               │
 ▼               ▼
MySQL         Redis
 │               │
 ▼               ▼
Meilisearch   Celery
                   │
                   ▼
              Celery Beat
```

---

## 🛠 Tech Stack

### Frontend

* Next.js

### Backend

* Django
* Django REST Framework (DRF)

### Database

* MySQL

### Search Engine

* Meilisearch

### Cache & Message Broker

* Redis

### Background Tasks

* Celery
* Celery Beat

### Deployment

* Ubuntu VPS

---

## 📂 Project Structure

```text
PathUp/
│
├── next_frontend/
│
├── pathup_backend/
│
├── docs/
│
├── run website.bat
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

Install the following:

* Python 3.11+
* Node.js
* MySQL
* Redis (or Memurai on Windows)
* Meilisearch

---

### Frontend Setup

```bash
cd next_frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

### Backend Setup

```bash
cd pathup_backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Start development server:

```bash
python manage.py runserver
```

Backend runs on:

```text
http://localhost:8000
```

---

## 🔍 Search System

PathUp uses Meilisearch to provide:

* Fast full-text search
* Search suggestions
* Advanced filtering
* Scalable indexing
* High-performance query execution

---



## 📌 Project Status

**Current Status:** Beta

PathUp is actively under development with a focus on expanding educational data coverage, improving search capabilities, and helping students discover the right opportunities for higher education.

---

## 🛣 Roadmap

### Upcoming Features

* AI Career Recommendations
* College Comparison Tool
* Ranking System
* Scholarship Discovery
* Mobile Application
* Enhanced Search Experience

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a Pull Request

---

## 📄 License

License information will be added before public release.

