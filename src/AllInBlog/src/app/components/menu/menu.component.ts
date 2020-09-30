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
    { name: "Veille Techno", route: paths.Post("2017-12-01-Veille-technologique") },
    { name: "Mes références", route: paths.Post("2020-01-01-References") },
  ];
}
