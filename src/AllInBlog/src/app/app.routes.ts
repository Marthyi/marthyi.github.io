import { Routes } from "@angular/router";
import { ArticleComponent } from "./container/article/article.component";
import { HomeComponent } from "./container/home/home.component";

export class paths {
  public static Home: string = "";
  public static Posts: string = "posts";

  public static Post(article: string): string {
    return `${paths.Posts}/${article}`;
  }
}

export const routes: Routes = [
  { path: paths.Home, component: HomeComponent },
  { path: paths.Posts + "/:post", component: ArticleComponent }
];
