import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HarrypotterService } from './harrypotter.service';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { NavComponent } from './nav/nav.component';
import { GroupByPipe } from './group-by.pipe';
import { DataStorage } from './data-storage';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent,
    NavComponent,
    routingComponents,
    GroupByPipe
  ],
  bootstrap: [AppComponent],
  providers: [HarrypotterService,DataStorage],
})
export class AppModule {}
