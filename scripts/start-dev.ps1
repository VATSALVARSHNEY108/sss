$projectRoot = Split-Path -Parent $PSScriptRoot
$backendRoot = Join-Path $projectRoot "backend"

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCommand) {
  Write-Host "Node.js was not found. Install Node 18+ and run npm run dev:all again." -ForegroundColor Red
  exit 1
}

$npmCommand = Get-Command npm.cmd -ErrorAction SilentlyContinue
if (-not $npmCommand) {
  Write-Host "npm.cmd was not found. Reinstall Node.js and run npm run dev:all again." -ForegroundColor Red
  exit 1
}

& cmd.exe /c start "" /b "`"$($nodeCommand.Source)`"" "`"$(Join-Path $backendRoot "server.mjs")`""

& cmd.exe /c start "" /b "`"$($npmCommand.Source)`"" run dev

Write-Host "Started Whobee backend on http://localhost:8000 and frontend on http://localhost:3000" -ForegroundColor Green
