# ============================================================
#  Preview ProRide website (LOCAL - not live)
#  1. Turn SITE-CONTENT.md into the site's data
#  2. Start the local preview server (if not already running)
#  3. Open it in your browser so you can check your changes
#  Nothing is published. When happy, use "Publish ProRide Website".
#  (Launched by the desktop button via preview.cmd, which keeps the window open.)
# ============================================================

$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$URL = "http://localhost:3000"

function Say($msg, $color = "White") { Write-Host $msg -ForegroundColor $color }
function Fail($msg) {
    Say ""
    Say "  X  $msg" "Red"
    Say ""
    exit 1
}
function Test-Server {
    try { Invoke-WebRequest $URL -UseBasicParsing -TimeoutSec 3 | Out-Null; return $true }
    catch { return $false }
}

try {
    Say ""
    Say "=====================================================" "Cyan"
    Say "   Preview ProRide website (local only)" "Cyan"
    Say "=====================================================" "Cyan"
    Say ""

    # --- Make sure node / npm are found ---
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    $env:NODE_OPTIONS = "--openssl-legacy-provider"

    # --- 1. Get the latest content (incl. anything saved in the web CMS) ---
    Say "[1/3] Syncing latest content from GitHub..." "White"
    git pull --ff-only 2>&1 | Out-Host

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
    Say "A minimized 'npm start' window keeps the preview running - you can" "DarkGray"
    Say "close it (and this window) when you're finished previewing." "DarkGray"
    Say ""
}
catch {
    Say ""
    Say "  X  Something unexpected went wrong:" "Red"
    Say "      $($_.Exception.Message)" "Red"
    Say ""
}
