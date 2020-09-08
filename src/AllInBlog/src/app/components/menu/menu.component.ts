import { Component } from "@angular/core";
import {  paths } from "src/app/app.routes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  title: string = "Marthyi.github.io";

  ROUTES = paths;

  links = [
    { name: "Article 1", route: paths.Post("2017-12-01-Bookmarks") },
    { name: "A propos", route: paths.Post("2017-12-01-Veille-technologique") },
  ];
}
