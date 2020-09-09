## Prérequis

* Créer un dossier Parent (Oliv.Blog)
* Créer un dossier 'src' pour contenir la solution


## Création de la solution dotnet

```bat
REM - Création de la solution
dotnet new sln --name Oli.Blog

REM Création d'un projet web
dotnet new web --name Front

REM Ajout du projet à la solution
dotnet sln Oli.Blog.sln add Front
````

Voilà ! On peut lancer le site en prod !
```bat
dotnet run --project Front
````


## Hébergement web

Afin d'exposer un contenu html, il faut créer un répertoire **wwwroot** dans le projet **Front**.

- Paramétrage de l'application pour afficher les fichiers statiques

Depuis le fichier *Startup.cs*, il faut modifier la méthode Configure() afin d'ajouter l'affichage des fichiers statiques.
```csharp
 public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var defaultFilesOptions = new DefaultFilesOptions();
            defaultFilesOptions.DefaultFileNames.Clear();
            defaultFilesOptions.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(defaultFilesOptions);
            app.UseStaticFiles();
        }
````
Vous pouvez à présent déposer un fichier index.html ou bien une image, dans le répertoire wwwroot. Le contenu sera afficher sur votre navigateur web.

----

**Sources:**

[MSDN - ASP.NET Core(https://docs.microsoft.com/fr-fr/aspnet/core)

[MSDN - dotnet cli](https://docs.microsoft.com/fr-fr/dotnet/core/tools/?tabs=netcore2x#cli-commands)


