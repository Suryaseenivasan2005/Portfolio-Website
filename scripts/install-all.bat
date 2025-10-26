@echo off
echo Installing Server Dependencies...
cd server
npm install

echo Installing Client Dependencies...
cd ..\client
npm install

echo All dependencies installed successfully!
pause
