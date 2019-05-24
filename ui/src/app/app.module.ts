import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrewingsComponent} from './brewings/brewings.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthService} from './services/authservice.service';
import {BrewingService} from './services/brewing.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialog,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TypesComponent} from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrewingsComponent,
    //GameComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TypesComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlashMessagesModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatSliderModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [HomeComponent, TypesComponent],
  providers: [AuthService ,FlashMessagesService, BrewingService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
