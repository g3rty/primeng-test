import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table.component';
import { TableWrapperComponent } from './wrapper/table-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    // MatInputModule,
  ],
  declarations: [AppComponent, TableWrapperComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
