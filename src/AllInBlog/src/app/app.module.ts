import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routes } from "./app.routes";
import { MainComponent } from "./components/main/main.component";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { PageComponent } from "./components/page/page.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent, MenuComponent, PageComponent],
  imports: [BrowserModule, HttpClientModule    ,MarkdownModule.forRoot({ loader: HttpClient }), RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
