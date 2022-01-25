import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HarrypotterService } from './harrypotter.service';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { DataStorage } from './data-storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserResolver } from './user.resolver';
import { LoaderService } from './loader.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,Ng2SearchPipeModule,MatProgressSpinnerModule],
  declarations: [AppComponent,
    NavComponent,
    routingComponents,
  ],
  bootstrap: [AppComponent],
  providers: [HarrypotterService,
    DataStorage, 
    UserResolver, 
    LoaderService  
  ],
})
export class AppModule {}
