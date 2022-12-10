import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { routes } from "./app.routes";
import { MainComponent } from "./components/main/main.component";
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
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { TimeCountComponent } from './components/time-count/time-count.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    PageComponent,
    ArticleComponent,
    HomeComponent,
    PostLinkComponent,
    TimeCountComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),    
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([Effects]),
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot(routes, {}),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    PostService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [MainComponent],
})
export class AppModule {}
