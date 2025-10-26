Write-Host "Installing Server Dependencies..." -ForegroundColor Yellow
cd server
npm install

Write-Host "Installing Client Dependencies..." -ForegroundColor Yellow
cd ../client
npm install

Write-Host "All dependencies installed successfully!" -ForegroundColor Green
