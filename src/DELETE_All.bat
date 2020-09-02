@echo off 

set current_dir=%~dp0

cd AllInBlog

DEL /F/Q/S *. * > NUL
cd %current_dir%
RMDIR /Q/S AllInBlog


cd %current_dir%
@echo on

