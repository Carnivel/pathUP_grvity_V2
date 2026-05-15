@echo off
title PathUp Website Starter - v2.0
echo ========================================================
echo   Starting PathUp Full Stack (v2.0 Architecture)
echo ========================================================

:: Background Core Services
echo [1/6] Starting Redis Backend...
start "Redis Server" cmd /k "echo Starting Redis... && redis-server || C:\PROGRA~1\Memurai\memurai.exe || echo ERROR: Redis not found. Please install Redis or Memurai."

echo [2/6] Starting Meilisearch...
start "Meilisearch" cmd /k "echo Starting Meilisearch... && cd pathup_backend && meilisearch --master-key=masterKey"

:: Django & Background Tasks (using venv)
echo [3/7] Starting Django Backend (venv)...
start "PathUp API" cmd /k "cd pathup_backend && call venv\Scripts\activate.bat && python manage.py runserver"

echo [4/7] Starting Celery Worker (venv)...
start "Celery Worker" cmd /k "cd pathup_backend && call venv\Scripts\activate.bat && python -m celery -A pathup_backend worker --pool=gevent --loglevel=info -Q default,search_indexing"

echo [5/7] Starting Celery Beat (venv)...
start "Celery Beat" cmd /k "cd pathup_backend && call venv\Scripts\activate.bat && python -m celery -A pathup_backend beat --loglevel=info"

:: Next.js Frontend
echo [6/6] Starting Next.js Frontend...
start "PathUp Frontend" cmd /k "cd next_frontend && npm run dev"

:: Ngrok Tunnel (Static Domain)
echo [7/7] Starting Ngrok Tunnel (Static Domain)...
start "Ngrok Tunnel" cmd /k "ngrok http 8000 --domain=proposable-catrina-unsoundly.ngrok-free.dev"
echo.
echo ========================================================
echo   All 7 services are initiating in separate windows.
echo   Backend URL: https://proposable-catrina-unsoundly.ngrok-free.dev
echo   Check individual windows for logs/errors.
echo ========================================================
echo.
pause

