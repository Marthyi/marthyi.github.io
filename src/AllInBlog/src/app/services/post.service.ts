import { Injectable } from "@angular/core";
import { PostServiceModel } from "src/app/services/serviceModels/serviceModels";

@Injectable({ providedIn: "root" })
export class PostService {
  x: RegExp = /(\d{4}-\d{2}-\d{2})(.*)/;

  getPosts(): PostServiceModel[] {
    return [
      {
        title: "2017-06-08-Créer-une-dynamicMethod-via-IL",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      {
        title: "2017-06-19-Créer-une-configuration-par-environnement",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      { title: "2017-08-16-markdown-cheatsheet" },
      {
        title: "2017-08-24-Fragmentation-d'index",
        image: "sql.png",
        tags: ["Sql"],
      },
      {
        title: "2017-09-15-Taille-d'une-base-SQL-Server",
        image: "sql.png",
        tags: ["Sql"],
      },
      {
        title: "2017-11-06-Monitoring-des-requêtes-SQL",
        image: "sql.png",
        tags: ["Sql"],
      },
      { title: "2017-12-01-Bookmarks" },
      { title: "2017-12-01-Veille-technologique" },
      {
        title: "2018-03-15-Les-différentes-version-de-C#",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      { title: "2018-04-16-C# 7.0", image: "c_sharp.png", tags: ["C#"] },
      {
        title: "2018-12-20-Acceder-à-une-ressource-embedded",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      {
        title: "2019-01-06-Entity-Framework-Core-part-1",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      {
        title:
          "2019-01-14-Organiser-ses-fichiers-appsettings-dans-une-application-console",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      { title: "2019-01-15-Tips-pour-mes-scripts-cmd" },
      {
        title: "2019-01-20-Entity-Framework-Core-part-2",
        image: "c_sharp.png",
        tags: ["C#"],
      },
      { title: "2019-02-06-Supprimer-les-fichiers-bin-et-obj-de-ma-solution" },
      { title: "2019-02-15-Creer-un-app-angular-dotnet-part-1" },
      { title: "2019-02-19-Creer-un-app-angular-dotnet-part-2" },
      { title: "2019-02-25-Creer-un-app-angular-dotnet-part-3" },
      { title: "2019-03-15-Raccourcis-windows" },
      { title: "2019-08-22-C# 7.1", image: "c_sharp.png", tags: ["C#"] },
      {
        title: "2019-09-04-Paris-timezone-sql",
        image: "sql.png",
        tags: ["Sql"],
      },
      {
        title: "2019-10-29-Administrer-les-acces-Sql-Server",
        image: "sql.png",
        tags: ["Sql"],
      },
      {
        title:
          "2020-07-01-Comment-hoster-en-local-pour-une-app-Angular-avec-Docker",
      },
      {
        title:
          "2020-08-17-Checker-rapidement-la-structure-des-index-sur-Sql-Server",
        image: "sql.png",
        tags: ["Sql"],
      },
    ].map((p) => {
      let compile = this.x.exec(p.title);

      return <PostServiceModel>{
        title: compile?.[2].replace(/-/gi, " "),
        creationDate: new Date(compile?.[1] || ""),
        fileName: p.title,
        image: p.image,
        tags: p.tags,
      };
    });
  }
}
