# ============================================================
#  Publish ProRide website (desktop)
#  Content now lives in src/data/siteContent.json (edited via the /admin CMS).
#  This button is the desktop path: build-check, then push so GitHub Actions
#  deploys it live. Most of the time you'll just use the web CMS instead.
# ============================================================

$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

function Say($msg, $color = "White") { Write-Host $msg -ForegroundColor $color }
function Fail($msg) {
    Say ""
    Say "  X  $msg" "Red"
    Say ""
    Say "Nothing was published. Your website is still live and unchanged." "Yellow"
    exit 1
}

try {
    Say ""
    Say "=====================================================" "Cyan"
    Say "   Publishing ProRide website" "Cyan"
    Say "=====================================================" "Cyan"
    Say ""

    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    $env:NODE_OPTIONS = "--openssl-legacy-provider"
    $env:CI = "false"

    # --- Get any changes made in the web CMS first ---
    Say "[1/3] Syncing with GitHub..." "White"
    git pull --ff-only 2>&1 | Out-Host

    # --- Build (safety gate) ---
    Say ""
    Say "[2/3] Building the site (checking nothing is broken)..." "White"
    & npm run build
    if ($LASTEXITCODE -ne 0) {
        Fail "The site failed to build, so it was NOT published. Fix the flagged issue and try again."
    }

    # --- Commit + push (GitHub Actions then deploys live) ---
    Say ""
    Say "[3/3] Saving to GitHub (it will publish live automatically)..." "White"
    git add "src/data/siteContent.json" 2>$null
    $changes = git status --porcelain "src/data/siteContent.json"
    if ($changes) {
        $stamp = Get-Date -Format "yyyy-MM-dd"
        $count = 0
        $c = git rev-list --count --grep="Site update [0-9]" HEAD 2>$null
        if ($c) { $count = [int]$c }
        $ver = $count + 1
        $msg = "Site update $stamp v$ver"
        git commit -m $msg | Out-Null
        Say "      Saved as: $msg" "Green"
        & git push origin main
        if ($LASTEXITCODE -ne 0) { Fail "Couldn't push to GitHub. Check your internet connection and try again." }
    } else {
        Say "      No local content changes to publish." "DarkGray"
        Say "      (If you edited in the web CMS, it already published itself.)" "DarkGray"
    }

    Say ""
    Say "=====================================================" "Green"
    Say "   DONE - GitHub is building and publishing your site." "Green"
    Say "=====================================================" "Green"
    Say ""
    Say "The live site updates in a minute or two." "White"
    Say "View it at:  https://proridecoaching.co.uk" "Cyan"
    Say "(Tip: press Ctrl+F5 in your browser to force a refresh.)" "DarkGray"
    Say ""
}
catch {
    Say ""
    Say "  X  Something unexpected went wrong:" "Red"
    Say "      $($_.Exception.Message)" "Red"
    Say ""
    Say "Nothing was published. Send this message to Claude and it'll sort it out." "Yellow"
    exit 1
}
