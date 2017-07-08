import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component:  }
];


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true
      })],
  exports:[RouterModule],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class headerRoutingModule { }
