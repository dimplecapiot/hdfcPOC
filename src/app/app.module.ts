import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/MaterialModule/material.module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import { RoutingModule } from './modules/RouterModule/router.module';
import { PageNotFoundComponent } from './components/template/page-not-found/page-not-found.component';
import { InputComponent } from './components/form/input/input.component';
import { HeaderMenuComponent } from './components/navigation/header-menu/header-menu.component';

import { CustomInterceptor } from './modules/InterceptorModule/CustomInterceptor.module';
import { SideDrawerComponent } from './components/template/side-drawer/side-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    InputComponent,
    HeaderMenuComponent,
    SideDrawerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
