@echo off
echo ================================
echo Push MuseAI to GitHub
echo ================================
echo.
echo IMPORTANT: Make sure you've created the repository on GitHub first!
echo Go to: https://github.com/new
echo.
set /p username="Enter your GitHub username: "
echo.
echo Adding remote repository...
git remote add origin https://github.com/%username%/MuseAI.git
echo.
echo Renaming branch to main...
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo ================================
echo Done! Your project is now on GitHub!
echo Visit: https://github.com/%username%/MuseAI
echo ================================
pause

