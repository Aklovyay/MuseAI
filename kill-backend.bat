@echo off
echo ================================
echo Killing Backend Process
echo ================================
echo.
echo Finding process on port 3001...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001 ^| findstr LISTENING') do (
    echo Killing process %%a...
    taskkill /PID %%a /F
)
echo.
echo Done! Port 3001 is now free.
echo You can now run start-backend.bat
echo.
pause

