@echo off
title PathUp Backend Server (venv)
echo ============================================
echo   PathUp Backend Server - Virtual Environment
echo ============================================
echo.

cd /d "%~dp0pathup_backend"

REM Check if venv exists, create if not
if not exist "venv\Scripts\activate.bat" (
    echo [1/3] Creating virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo [ERROR] Failed to create venv. Make sure Python is installed.
        pause
        exit /b 1
    )
    echo [OK] Virtual environment created.
    echo.

    echo [2/3] Installing dependencies...
    call venv\Scripts\activate.bat
    pip install -r ..\requirements.txt
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
    echo [OK] Dependencies installed.
) else (
    echo [OK] Virtual environment found.
    call venv\Scripts\activate.bat
)

echo.
echo [3/3] Starting Django server...
echo ============================================
echo   Server: http://localhost:8000
echo   Admin:  http://localhost:8000/admin/
echo   Press Ctrl+C to stop
echo ============================================
echo.

python manage.py runserver
pause
