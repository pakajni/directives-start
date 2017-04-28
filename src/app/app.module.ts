import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AgGridModule} from 'ag-grid-angular/main';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { SideBarComponent } from './side-bar/side-bar.component';
import { JdGridComponent } from './jd-grid/jd-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    SideBarComponent,
    JdGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents(
            []
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
