---
tags: tips
---

Afin d'automatiser le plus de taches possibles, voici les éléments de bases que j'utilise pour mes scripts

``` cmd
@echo off &rem ne pas afficher les lignes de commandes du scripts

REM récupération du chemin courant afin de pouvoir y revenir en fin de script
set current_dir=%~dp0

REM debut de script
...
REM fin de script

cd %current_dir%
@echo on
````
