import { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";

export const paths =  
{
  Home : "",
}


export const routes: Routes = 
[
  { path: paths.Home, component: MainComponent },
];
