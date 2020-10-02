import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PostService } from "src/app/services/post.service";
import { PostModel } from "src/app/services/serviceModels/serviceModels";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public $posts: Observable<PostModel[]> = new Observable<PostModel[]>();

  constructor(private ps: PostService) {
    this.$posts = this.ps
      .getPosts()
      .pipe(
        map((p:PostModel[]) => p.sort((a, b) => this.compareDate(b, a)))        
      );  
  }

  compareDate(a: PostModel, b: PostModel): number {
    return a.creationDate.valueOf() - b.creationDate.valueOf();
  }
}
