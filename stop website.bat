@echo off
title PathUp Website - STOP ALL
color 0C
echo ========================================================
echo   Stopping All PathUp Services
echo ========================================================
echo.

:: Kill Next.js (node)
echo [1/6] Stopping Next.js Frontend...
taskkill /FI "WINDOWTITLE eq PathUp Frontend*" /F >nul 2>&1
taskkill /IM node.exe /F >nul 2>&1
echo        Done.

:: Kill Django (python runserver)
echo [2/6] Stopping Django Backend...
taskkill /FI "WINDOWTITLE eq PathUp API*" /F >nul 2>&1
echo        Done.

:: Kill Celery Worker
echo [3/6] Stopping Celery Worker...
taskkill /FI "WINDOWTITLE eq Celery Worker*" /F >nul 2>&1
echo        Done.

:: Kill Celery Beat
echo [4/6] Stopping Celery Beat...
taskkill /FI "WINDOWTITLE eq Celery Beat*" /F >nul 2>&1
echo        Done.

:: Kill Meilisearch
echo [5/6] Stopping Meilisearch...
taskkill /FI "WINDOWTITLE eq Meilisearch*" /F >nul 2>&1
taskkill /IM meilisearch.exe /F >nul 2>&1
echo        Done.

:: Kill Redis
echo [6/6] Stopping Redis...
taskkill /FI "WINDOWTITLE eq Redis Server*" /F >nul 2>&1
taskkill /IM redis-server.exe /F >nul 2>&1
taskkill /IM memurai.exe /F >nul 2>&1
echo        Done.

:: Also kill any remaining python/celery processes tied to pathup
taskkill /FI "WINDOWTITLE eq PathUp*" /F >nul 2>&1

echo.
echo ========================================================
echo   All PathUp services have been stopped.
echo ========================================================
echo.
pause
