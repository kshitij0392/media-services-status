import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { StatusComponent } from './components/status/status.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule} from './material.module';
import { ContainerComponent } from './components/container/container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from './components/footer/footer.component';

// Angular ADAL
import { Http, HttpModule } from '@angular/http';
import { AdalService, AdalInterceptor } from 'adal-angular4';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    StatusComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ AdalService, {provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
