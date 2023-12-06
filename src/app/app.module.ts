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
import { ApiServiceService } from './Services/api-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagesModule } from './pages/pages.module';

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
    PlantGuideModule,
    BrowserAnimationsModule,
    PagesModule
  ],
  providers: [
    AuthService,
    ModalService,
    ApiServiceService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
