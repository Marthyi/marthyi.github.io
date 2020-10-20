@echo off 

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

cd AllInBlog
call npm install
call ng build --prod --output-hashing all

cd %current_dir%

cd ..

DEL /F/Q *.ico
DEL /F/Q *.html
DEL /F/Q *.css
DEL /F/Q *.js
DEL /F/Q *.txt
RMDIR /Q/S assets

cd %current_dir%

Powershell.exe -executionpolicy remotesigned -File  publish_dist.ps1

cd %current_dir%
@echo on