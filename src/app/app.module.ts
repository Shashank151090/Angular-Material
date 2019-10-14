import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule,MatExpansionModule,MatStepperModule,MatDatepickerModule,MatNativeDateModule, MatProgressSpinnerModule, MatInputModule,MatMenuModule,MatCardModule, MatGridListModule,MatIconModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SignupComponent,
    TestComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatStepperModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
