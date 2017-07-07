import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MidsectionComponent } from './midsection.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
  BrowserModule,
  FormsModule,
  HttpModule,
],
  providers: [],
  bootstrap: [ MidsectionComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
