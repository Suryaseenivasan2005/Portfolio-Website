# Portfolio Backend Setup Scripts

## Windows PowerShell Scripts

### Start Server (PowerShell)
```powershell
# start-server.ps1
Write-Host "Starting Portfolio Backend Server..." -ForegroundColor Green
cd server
npm run dev
```

### Start Client (PowerShell)
```powershell
# start-client.ps1
Write-Host "Starting Portfolio Frontend Client..." -ForegroundColor Blue
cd client
npm run dev
```

### Install All Dependencies (PowerShell)
```powershell
# install-all.ps1
Write-Host "Installing Server Dependencies..." -ForegroundColor Yellow
cd server
npm install

Write-Host "Installing Client Dependencies..." -ForegroundColor Yellow
cd ../client
npm install

Write-Host "All dependencies installed successfully!" -ForegroundColor Green
```

## Batch Files (Alternative)

### start-server.bat
```batch
@echo off
echo Starting Portfolio Backend Server...
cd server
npm run dev
pause
```

### start-client.bat
```batch
@echo off
echo Starting Portfolio Frontend Client...
cd client
npm run dev
pause
```

### install-all.bat
```batch
@echo off
echo Installing Server Dependencies...
cd server
npm install

echo Installing Client Dependencies...
cd ..\client
npm install

echo All dependencies installed successfully!
pause
```

## Usage Instructions

1. **First Time Setup:**
   - Run `install-all.ps1` or `install-all.bat` to install all dependencies
   - Copy `server/env.example` to `server/.env` and configure your MongoDB URI

2. **Development:**
   - Open two terminals/command prompts
   - Terminal 1: Run `start-server.ps1` or `start-server.bat`
   - Terminal 2: Run `start-client.ps1` or `start-client.bat`

3. **Access Points:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## Environment Configuration

Make sure to create `server/.env` with:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:5173
```

Replace `MONGODB_URI` with your actual MongoDB connection string when ready.
