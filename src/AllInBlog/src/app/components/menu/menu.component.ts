import { Component, OnInit } from "@angular/core";
import { routes, paths } from "src/app/app.routes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  title: string = "Marthyi.github.io";

  links = [
    { name: "A propos", route: paths.Home },
    { name: "A propos", route: paths.Home },
  ];
}
