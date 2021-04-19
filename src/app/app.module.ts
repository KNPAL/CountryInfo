import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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
 import { HighlightSearchDirective } from './directives/highlight-search.directive';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './Services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkspaceComponent,
    FilterSectionComponent,
    GridSectionComponent,
    CountryDetailDialogComponent,
    HighlightSearchDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [CountryDetailDialogComponent],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
