## Script de build

A la racine de votre projet, au même niveau que src, créer un répertoire build.

A l'intérieur de ce fichier nous pouvons créer quelques scripts pour simplifier les taches de build et de run de l'application.

-  *build_angular.bat*
```bat
@echo off
set current_dir=%~dp0
cd ..\src\Front\App\OliApp
call ng build --prod
cd %current_dir%
@echo on
````

-  *build_dotnet.bat*
```bat
@echo off
set current_dir=%~dp0
cd ..\src\Front\
dotnet build -c Release
cd %current_dir%
@echo on
````

-  *run_app.bat*
```bat
@echo off
set current_dir=%~dp0
cd ..\src\Front\
CALL dotnet run -c Release
cd %current_dir%
@echo on
````
----
**Sources:**

[docs.microsoft.com - Commandes windows](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)


