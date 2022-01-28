
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LoginComponent } from './pages/public/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { PrivateComponent } from './menu/private/private.component';
import { PublicComponent } from './menu/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
    HeaderComponent,
    PublicComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
