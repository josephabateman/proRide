@echo off
title Publish ProRide Website
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0publish.ps1"
echo.
pause
