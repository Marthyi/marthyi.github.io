@echo off 

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

cd AllInBlog
ng serve --open --aot

cd %current_dir%
@echo on