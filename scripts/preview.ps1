# ============================================================
#  Preview ProRide website (LOCAL - not live)
#  1. Turn SITE-CONTENT.md into the site's data
#  2. Start the local preview server (if not already running)
#  3. Open it in your browser so you can check your changes
#  Nothing is published. When happy, use "Publish ProRide Website".
# ============================================================

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$URL = "http://localhost:3000"

function Say($msg, $color = "White") { Write-Host $msg -ForegroundColor $color }
function Fail($msg) {
    Say ""
    Say "  X  $msg" "Red"
    Say ""
    Read-Host "Press Enter to close"
    exit 1
}
function Test-Server {
    try { Invoke-WebRequest $URL -UseBasicParsing -TimeoutSec 3 | Out-Null; return $true }
    catch { return $false }
}

Say ""
Say "=====================================================" "Cyan"
Say "   Preview ProRide website (local only)" "Cyan"
Say "=====================================================" "Cyan"
Say ""

# --- Make sure node / npm are found ---
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
$env:NODE_OPTIONS = "--openssl-legacy-provider"

# --- Find Python ---
$python = Get-ChildItem "$env:LOCALAPPDATA\Programs\Python\Python*\python.exe" -ErrorAction SilentlyContinue |
    Sort-Object FullName -Descending | Select-Object -First 1 -ExpandProperty FullName
if (-not $python) {
    if (Get-Command py -ErrorAction SilentlyContinue) { $python = "py" } else { $python = "python" }
}

# --- 1. SITE-CONTENT.md -> siteContent.json ---
Say "[1/3] Reading your text changes..." "White"
& $python "scripts\apply_content.py"
if ($LASTEXITCODE -ne 0) { Fail "Couldn't read SITE-CONTENT.md. Check you didn't delete any of the LABELS or separator lines, then try again." }

# --- 2. Start the preview server if needed ---
Say ""
if (Test-Server) {
    Say "[2/3] Preview server already running - it will refresh with your changes." "White"
} else {
    Say "[2/3] Starting the preview server (this takes ~30 seconds the first time)..." "White"
    $startCmd = '$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User"); ' +
                '$env:NODE_OPTIONS = "--openssl-legacy-provider"; $env:BROWSER = "none"; ' +
                'Set-Location "' + $repo + '"; npm start'
    Start-Process powershell -WindowStyle Minimized -ArgumentList '-NoExit', '-Command', $startCmd

    $ready = $false
    foreach ($i in 1..40) {
        Start-Sleep -Seconds 3
        if (Test-Server) { $ready = $true; break }
    }
    if (-not $ready) { Fail "The preview server didn't start in time. Try running this again." }
}

# --- 3. Open in browser ---
Say ""
Say "[3/3] Opening your preview in the browser..." "White"
Start-Process $URL

Say ""
Say "=====================================================" "Green"
Say "   Preview is open at $URL" "Green"
Say "=====================================================" "Green"
Say ""
Say "This is a LOCAL preview - it is NOT live yet." "Yellow"
Say "Happy with it?  Double-click 'Publish ProRide Website' to go live." "White"
Say ""
Say "Leave this window and the minimized 'npm start' window open while" "DarkGray"
Say "previewing. You can close them when you're done." "DarkGray"
Say ""
Read-Host "Press Enter to close this window"
