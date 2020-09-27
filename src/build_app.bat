@echo off 

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

cd AllInBlog
call npm install
ng build --prod 

cd %current_dir%
@echo on