import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PostModel } from "src/app/services/serviceModels/serviceModels";
import { paths } from 'src/app/app.routes';

@Component({
  selector: "app-post-link",
  templateUrl: "./post-link.component.html",
  styleUrls: ["./post-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostLinkComponent {
  @Input("post")
  post!: PostModel;

constructor() {
  
}

  getLink():string {
    return paths.Post(encodeURI(this.post.fileName));
  } 

}
