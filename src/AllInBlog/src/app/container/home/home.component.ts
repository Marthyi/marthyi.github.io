import { Component } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { PostModel } from "src/app/services/serviceModels/serviceModels";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public posts: PostModel[] = [];

  constructor(private ps: PostService) {   

    this.ps.getPosts().subscribe((p) => {
      this.posts = p;
    });
  }
}
