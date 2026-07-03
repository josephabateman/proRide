@echo off
title Preview ProRide Changes
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0preview.ps1"
echo.
pause
