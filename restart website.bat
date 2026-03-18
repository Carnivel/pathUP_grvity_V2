@echo off
title PathUp Website - RESTART + CACHE CLEAR
color 0B
echo ========================================================
echo   Restarting PathUp Full Stack + Clearing All Caches
echo ========================================================
echo.

:: ===================== STEP 1: STOP ALL SERVICES =====================
echo --- PHASE 1: Stopping all running services ---
echo.

echo [1/6] Stopping Next.js Frontend...
taskkill /FI "WINDOWTITLE eq PathUp Frontend*" /F >nul 2>&1
:: DO NOT use "taskkill /IM node.exe /F" here — it kills ALL node processes
:: including VS Code terminals, which terminates this script mid-execution.
:: Instead, target only known PathUp-related node windows:
taskkill /FI "WINDOWTITLE eq npm*" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq next*" /F >nul 2>&1
echo        Done.

echo [2/6] Stopping Django Backend...
taskkill /FI "WINDOWTITLE eq PathUp API*" /F >nul 2>&1
echo        Done.

echo [3/6] Stopping Celery Worker...
taskkill /FI "WINDOWTITLE eq Celery Worker*" /F >nul 2>&1
echo        Done.

echo [4/6] Stopping Celery Beat...
taskkill /FI "WINDOWTITLE eq Celery Beat*" /F >nul 2>&1
echo        Done.

echo [5/6] Stopping Meilisearch...
taskkill /FI "WINDOWTITLE eq Meilisearch*" /F >nul 2>&1
taskkill /IM meilisearch.exe /F >nul 2>&1
echo        Done.

echo [6/6] Stopping Redis...
taskkill /FI "WINDOWTITLE eq Redis Server*" /F >nul 2>&1
:: Don't kill Redis process itself yet - need it for cache flush
echo        Done.



echo.
echo --- All services stopped. ---
echo.

:: ===================== STEP 2: CLEAR CACHES =====================
echo --- PHASE 2: Clearing all caches ---
echo.

:: Clear Redis cache (Django cache, Celery results, view counters)
echo [Cache 1/4] Flushing Redis cache...
redis-cli FLUSHALL >nul 2>&1
if %errorlevel% equ 0 (
    echo            Redis cache cleared successfully.
) else (
    echo            Redis not running or redis-cli not found - skipping.
)

:: Clear Celery Beat schedule file
echo [Cache 2/4] Clearing Celery Beat schedule...
if exist "pathup_backend\celerybeat-schedule" (
    del /F /Q "pathup_backend\celerybeat-schedule" >nul 2>&1
    echo            Celery Beat schedule cleared.
) else (
    echo            No schedule file found - skipping.
)
if exist "pathup_backend\celerybeat-schedule.db" (
    del /F /Q "pathup_backend\celerybeat-schedule.db" >nul 2>&1
)

:: Clear Next.js build cache
echo [Cache 3/4] Clearing Next.js cache...
if exist "next_frontend\.next" (
    rmdir /S /Q "next_frontend\.next" >nul 2>&1
    echo            Next.js cache cleared.
) else (
    echo            No Next.js cache found - skipping.
)

:: Clear Python __pycache__
echo [Cache 4/4] Clearing Python bytecode cache...
for /d /r "pathup_backend" %%d in (__pycache__) do (
    if exist "%%d" rmdir /S /Q "%%d" >nul 2>&1
)
echo            Python cache cleared.

:: Now stop Redis fully (after flush)
taskkill /IM redis-server.exe /F >nul 2>&1
taskkill /IM memurai.exe /F >nul 2>&1

echo.
echo --- All caches cleared. ---
echo.

:: Wait a moment for processes to fully terminate
echo Waiting for processes to fully terminate...
timeout /t 3 /nobreak >nul

:: ===================== STEP 3: RESTART ALL SERVICES =====================
echo.
echo --- PHASE 3: Starting all services fresh ---
echo.

echo [1/6] Starting Redis Backend...
start "Redis Server" cmd /k "echo Starting Redis... && redis-server || C:\PROGRA~1\Memurai\memurai.exe || echo ERROR: Redis not found."

:: Brief pause to let Redis initialize before flushing
timeout /t 2 /nobreak >nul

echo [2/6] Starting Meilisearch...
start "Meilisearch" cmd /k "echo Starting Meilisearch... && cd pathup_backend && meilisearch --master-key=masterKey"

echo [3/6] Starting Django Backend...
start "PathUp API" cmd /k "cd pathup_backend && python manage.py runserver"

echo [4/6] Starting Celery Worker...
start "Celery Worker" cmd /k "cd pathup_backend && python -m celery -A pathup_backend worker --pool=gevent --loglevel=info -Q default,search_indexing"

echo [5/6] Starting Celery Beat...
start "Celery Beat" cmd /k "cd pathup_backend && python -m celery -A pathup_backend beat --loglevel=info"

echo [6/6] Starting Next.js Frontend...
start "PathUp Frontend" cmd /k "cd next_frontend && npm run dev"

echo.
echo ========================================================
echo   RESTART COMPLETE!
echo   - All caches cleared (Redis, Celery, Next.js, Python)
echo   - All 6 services restarted in separate windows
echo   - Check individual windows for logs/errors
echo ========================================================
echo.
pause
