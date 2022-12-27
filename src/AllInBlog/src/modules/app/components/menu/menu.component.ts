import { ChangeDetectionStrategy, Component } from "@angular/core";
import {  paths } from "@app/app.routes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  title = "Marthyi.github.io";

  ROUTES = paths;

  links = [
    { name: "Veille Techno", route: paths.Post("2017-12-01-Veille-technologique") },
    { name: "Mes références", route: paths.Post("2020-01-01-References") },
    { name: "Before week-end", route: paths.TimeCount },
  ];
}
