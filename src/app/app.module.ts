import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './externalModule/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { FilterSectionComponent } from './workspace/filter-section/filter-section.component';
import { GridSectionComponent } from './workspace/grid-section/grid-section.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './Services/http-interceptor.service';
import { CountryDetailDialogComponent } from './dialogbox/country-detail-dialog/country-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkspaceComponent,
    FilterSectionComponent,
    GridSectionComponent,
    CountryDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [CountryDetailDialogComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
