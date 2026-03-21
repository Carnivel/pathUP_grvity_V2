@echo off
title PathUp Redis Cache Clearer
echo ========================================================
echo   Clearing Redis Cache (PathUp Backend)
echo ========================================================
echo.

:: Try redis-cli first
where redis-cli >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [1/1] Running 'redis-cli flushall'...
    redis-cli flushall
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo Success: Redis cache cleared successfully.
    ) else (
        echo.
        echo Error: Failed to clear Redis cache. Is the server running?
    )
    goto end
)

:: Try Memurai CLI if redis-cli not in PATH
where memurai-cli >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [1/1] Running 'memurai-cli flushall'...
    memurai-cli flushall
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo Success: Memurai cache cleared successfully.
    ) else (
        echo.
        echo Error: Failed to clear Memurai cache. Is the server running?
    )
    goto end
)

:: Try hardcoded Memurai path if not in PATH
if exist "C:\Program Files\Memurai\memurai-cli.exe" (
    echo [1/1] Running Memurai CLI from C:\Program Files\Memurai...
    "C:\Program Files\Memurai\memurai-cli.exe" flushall
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo Success: Memurai cache cleared successfully.
    ) else (
        echo.
        echo Error: Failed to clear Memurai cache. Is the server running?
    )
    goto end
)

echo Error: Neither 'redis-cli' nor 'memurai-cli' was found in your PATH or common locations.
echo Please ensure Redis or Memurai is installed and added to your system PATH.

:end
echo.
echo ========================================================
pause
