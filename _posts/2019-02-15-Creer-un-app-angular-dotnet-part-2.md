---
tags: dotnet
---


## Création de l'app Angular

```bat
ng new OliApp  --minimal=true --style=scss --skipGit=true --skipTests=true
cd OliApp
rmdir e2e /q /s
````

Afin de publier au build l'app angular dans le dossier wwwroot de l'application dotnet, il est nécessaire de modifier le fichier tsconfig.json

```json
 "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/OliApp", -> "../../wwwroot"
````


Afin de voir la première version du site, il ne reste une dernière étape. Builder l'application angular

- depuis la répertoire App/OliApp
```cmd
ng build
````

A présent, le site (dotnet + angular) est prêt. Il suffit de lancer l'application dotnet et le front Angular s'affiche.

----
**Sources:**

[Google - Angular CLI](https://angular.io/cli/)


