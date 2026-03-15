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

:: Django & Background Tasks
echo [3/6] Starting Django Backend...
start "PathUp API" cmd /k "cd pathup_backend && python manage.py runserver"

echo [4/6] Starting Celery Worker...
start "Celery Worker" cmd /k "cd pathup_backend && python -m celery -A pathup_backend worker --pool=gevent --loglevel=info -Q default,search_indexing"

echo [5/6] Starting Celery Beat...
start "Celery Beat" cmd /k "cd pathup_backend && python -m celery -A pathup_backend beat --loglevel=info"

:: Next.js Frontend
echo [6/6] Starting Next.js Frontend...
start "PathUp Frontend" cmd /k "cd next_frontend && npm run dev"
echo.
echo ========================================================
echo   All 6 services are initiating in separate windows.
echo   Check individual windows for logs/errors.
echo ========================================================
echo.
pause

