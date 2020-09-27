@echo off 

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

cd ..

DEL /F/Q *.ico
DEL /F/Q *.html
DEL /F/Q *.css
DEL /F/Q *.js
DEL /F/Q *.txt
RMDIR /Q/S assets

REM copy ".\src\AllInBlog\dist" *.*  "."


cd %current_dir%
@echo on