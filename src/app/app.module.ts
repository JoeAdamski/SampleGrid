import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import { VulnerabilityService } from './vulnerability.service';
import { VunerabilityGridComponent } from './vunerability-grid/vunerability-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    VunerabilityGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    VulnerabilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
