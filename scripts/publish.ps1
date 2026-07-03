# ============================================================
#  Publish ProRide website
#  1. Turn SITE-CONTENT.md into the site's data (siteContent.json)
#  2. Build the site  (SAFETY GATE - stops here if anything is broken)
#  3. Commit + push, then deploy live to proridecoaching.co.uk
# ============================================================

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

function Say($msg, $color = "White") { Write-Host $msg -ForegroundColor $color }
function Fail($msg) {
    Say ""
    Say "  X  $msg" "Red"
    Say ""
    Say "Nothing was published. Your website is still live and unchanged." "Yellow"
    Read-Host "Press Enter to close"
    exit 1
}

Say ""
Say "=====================================================" "Cyan"
Say "   Publishing ProRide website" "Cyan"
Say "=====================================================" "Cyan"
Say ""

# --- Make sure node / npm are found ---
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
$env:NODE_OPTIONS = "--openssl-legacy-provider"
$env:CI = "false"   # don't treat build warnings as errors

# --- Find Python ---
$python = Get-ChildItem "$env:LOCALAPPDATA\Programs\Python\Python*\python.exe" -ErrorAction SilentlyContinue |
    Sort-Object FullName -Descending | Select-Object -First 1 -ExpandProperty FullName
if (-not $python) {
    if (Get-Command py -ErrorAction SilentlyContinue) { $python = "py" } else { $python = "python" }
}

# --- 1. SITE-CONTENT.md  ->  siteContent.json ---
Say "[1/4] Reading your text changes..." "White"
& $python "scripts\apply_content.py"
if ($LASTEXITCODE -ne 0) { Fail "Couldn't read SITE-CONTENT.md. Check you didn't delete any of the LABELS or separator lines, then try again." }

# --- 2. Build (safety gate) ---
Say ""
Say "[2/4] Building the site (checking nothing is broken)..." "White"
npm run build
if ($LASTEXITCODE -ne 0) {
    # undo the generated data so the working copy is left clean
    git checkout -- "src/data/siteContent.json" 2>$null
    Fail "The site failed to build, so it was NOT published. Your SITE-CONTENT.md edits are still saved - fix the flagged text (often a stray bracket) and try again."
}

# --- 3. Commit + push the change ---
Say ""
Say "[3/4] Saving the change to GitHub..." "White"
git add "SITE-CONTENT.md" "src/data/siteContent.json" 2>$null
$changes = git status --porcelain "SITE-CONTENT.md" "src/data/siteContent.json"
if ($changes) {
    $stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    git commit -m "Content update via publish button ($stamp)" | Out-Null
    git push origin main
    if ($LASTEXITCODE -ne 0) { Fail "Couldn't push to GitHub. Check your internet connection and try again." }
} else {
    Say "      (no text changes since last publish - re-deploying current site)" "DarkGray"
}

# --- 4. Deploy the built site live ---
Say ""
Say "[4/4] Publishing live to proridecoaching.co.uk..." "White"
npx gh-pages -d build
if ($LASTEXITCODE -ne 0) { Fail "Deploy step failed. Try again in a minute." }

Say ""
Say "=====================================================" "Green"
Say "   DONE - your changes are published!" "Green"
Say "=====================================================" "Green"
Say ""
Say "The live site updates in a minute or two." "White"
Say "View it at:  https://proridecoaching.co.uk" "Cyan"
Say "(Tip: press Ctrl+F5 in your browser to force a refresh.)" "DarkGray"
Say ""
Read-Host "Press Enter to close"
