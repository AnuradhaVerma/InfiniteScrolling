import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card'; 
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatCardModule, 
    ScrollingModule, 
    HttpClientModule

  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
