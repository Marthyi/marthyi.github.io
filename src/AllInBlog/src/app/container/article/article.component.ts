import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent {
  article: string = "";
  title: string = "";

  constructor(private route: ActivatedRoute) {
    console.log("new path " + this.route.snapshot.paramMap.get("post"));

    this.setPost(this.route.snapshot.paramMap.get("post"));

    this.route.paramMap.subscribe((p) => {
      this.setPost(p.get("post"));
    });
  }

  setPost(post: string | null) {
    if (post == null) {
      return;
    }
    
    this.article = "/assets/posts/" + decodeURI(post) + ".md";

    this.title = decodeURI(post).replace(/\d{4}-\d{2}-\d{2}/,' ');
    this.title = this.title.replace(/-/gi,' ');


  }
}
