import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  isFirst: boolean = true;

  page1 = "/assets/_posts/2017-06-08-Créer-une-dynamicMethod-via-IL.md";
  page2 = "/assets/_posts/2017-06-19-Créer-une-configuration-par-environnement.md";

  src = this.page1;

  onClick() {
    if (this.isFirst) {
      this.src = this.page2;
    } else {
      this.src = this.page1;
    }

    this.isFirst = !this.isFirst;
  }
}
