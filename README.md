# PathUp: Education Discovery Platform (v2.0)

Welcome to the PathUp repository. This is a robust, full-stack application designed to help users discover courses and colleges.

## 🏗️ Architecture Overview

PathUp is built using a modern, scalable architecture:

1.  **Backend (API):** Django / Django REST Framework (DRF)
2.  **Frontend:** Next.js (App Router)
3.  **Search:** Meilisearch (High-performance search engine)
4.  **Task Queue:** Celery (Background task processing)
5.  **Cache/Broker:** Redis (backed by Memurai on Windows)
6.  **Periodic Tasks:** Celery Beat (Scheduled indexing and maintenance)

## 🚀 Quick Start (Windows)

The repository includes a convenience script to launch all 6 core services simultaneously.

1.  **Ensure Requirements are Installed:** (See [requirements.txt](file:///c:/Users/anandhu/pathupu_test_antigravity/requirements.txt) for download links).
    - Node.js & Python
    - Memurai (Redis compatible)
    - Meilisearch executable in `pathup_backend/`
2.  **Install Dependencies:**
    ```bash
    # Frontend
    cd next_frontend && npm install
    
    # Backend
    cd pathup_backend
    pip install -r requirements.txt
    pip install celery redis gevent
    ```
3.  **Run the Website:**
    - Double-click `run website.bat` in the root directory.
    - Six terminal windows will open, each managing a specific service.

## 🛠️ Components

### [pathup_backend](file:///c:/Users/anandhu/pathupu_test_antigravity/pathup_backend)
Contains the Django API, database models, and background task logic.
- **Port:** 8000
- **Admin:** `/admin`

### [next_frontend](file:///c:/Users/anandhu/pathupu_test_antigravity/next_frontend)
Modern Next.js frontend with SEO optimization and dynamic routing.
- **Port:** 3000 (standard Next.js)

## 📝 Configuration
Environment variables and configuration settings for search keys and database connections can be found in the respective directory `.env` files.
