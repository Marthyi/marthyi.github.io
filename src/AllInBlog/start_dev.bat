@echo off 

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

ng serve --open --hmr

cd %current_dir%
@echo on