import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  
}
