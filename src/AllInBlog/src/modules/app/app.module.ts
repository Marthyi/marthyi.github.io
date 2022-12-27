import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { routes } from "@app/app.routes";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { PageComponent } from "./components/page/page.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ArticleComponent } from "./container/article/article.component";
import { HomeComponent } from "./container/home/home.component";
import { PostService } from "./services/post.service";
import { PostLinkComponent } from "./container/home/post-link/post-link.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/actions";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { Effects } from "./store/effects";
import { TimeCountComponent } from './components/time-count/time-count.component';
import { BlogComponent } from './components/blog/blog.component';
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [
    MenuComponent,
    PageComponent,
    ArticleComponent,
    HomeComponent,
    PostLinkComponent,
    TimeCountComponent,
    BlogComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('app', reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule,
    EffectsModule.forFeature([Effects]),
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forChild(routes)
  ],
  providers: [
    PostService,
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppModule { }
