import { Routes } from '@angular/router';
import { ArticleComponent } from './container/article/article.component';
import { HomeComponent } from './container/home/home.component';
import { TimeCountComponent } from './components/time-count/time-count.component';
import { BlogComponent } from './components/blog/blog.component';

export class paths {
  public static Home = '';
  public static Blog = '';
  public static Posts = 'posts';
  public static TimeCount = 'before-weekend';

  public static Post(article: string): string {
    return `${paths.Posts}/${article}`;
  }
}

export const routes: Routes = [
  { path: paths.TimeCount, component: TimeCountComponent },
  {
    path: paths.Blog,
    component: BlogComponent,
    children: [
      { path: paths.Home, component: HomeComponent },
      { path: paths.Posts + '/:post', component: ArticleComponent },
      { path: '**', redirectTo: paths.Blog },
    ],
  },
  { path: '**', redirectTo: paths.Home },
];
