import { Component } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { PostServiceModel } from 'src/app/services/serviceModels/serviceModels';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private ps: PostService) {
    this.posts = ps.getPosts();
  }

  public posts: PostServiceModel[];
}
