import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy, Component, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { AppModule } from '@app/app.module';

@Component({
  standalone: true,
  selector: "app-root",
  imports: [AppModule, RouterModule],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(MainComponent,
  {
    providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      provideRouter([
        { path: '', loadChildren: () => import('./modules/app/app.module').then(m => m.AppModule) },
        { path: '**', redirectTo:'' },
      ]
      ),
      importProvidersFrom(
        StoreModule.forRoot({
          router: routerReducer,
        }),
        StoreRouterConnectingModule.forRoot(),        
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument(),
      )
    ]
  });

