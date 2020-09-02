import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routes } from "./app.routes";
import { MainComponent } from "./components/main/main.component";
import { RouterModule } from "@angular/router";
import { MenuComponent } from './components/menu/menu.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [MainComponent, MenuComponent, PageComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
