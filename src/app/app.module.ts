import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire/compat"
import { firebaseConfig } from 'src/environment';
import { CommonModule } from '@angular/common';
import { NotfountComponent } from './notfount/notfount.component';
import { ModalService } from './shared/modal/modal.service';
import {HttpClientModule} from "@angular/common/http"
import { HomeModule } from './home/home.module';
import { PlantGuideModule } from './plant-guide/plant-guide.module';
@NgModule({
  declarations: [
    AppComponent,
    NotfountComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AccountModule,
    AuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    HomeModule,
    PlantGuideModule
  ],
  providers: [
    AuthService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
