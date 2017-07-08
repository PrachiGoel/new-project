import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { headerRoutingModule } from './header-route.module';
import {ActivatedRoute} from '@angular/router';

// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';
// import {  HeaderComponent } from './header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    headerRoutingModule,
    ActivatedRoute
  ],
  declarations: [
    // HeaderComponent,
    // HomeComponent, AboutComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [  ]
})
export class HeaderModule {}
