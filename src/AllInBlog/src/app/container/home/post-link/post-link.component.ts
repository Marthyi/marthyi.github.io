import { Component, Input } from "@angular/core";
import { PostServiceModel } from "src/app/services/serviceModels/serviceModels";
import { paths } from 'src/app/app.routes';

@Component({
  selector: "app-post-link",
  templateUrl: "./post-link.component.html",
  styleUrls: ["./post-link.component.scss"],
})
export class PostLinkComponent {
  @Input("post")
  post!: PostServiceModel;

constructor() {
  
}

  getLink():string {
    return paths.Post(encodeURI(this.post.fileName));
  } 

}
