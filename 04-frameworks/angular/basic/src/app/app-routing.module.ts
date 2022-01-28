import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/public/about/about.component';
import { LoginComponent } from './pages/public/login/login.component';
import { HomeComponent } from './pages/public/home/home.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { ProfileComponent } from './pages/private/profile/profile.component';

const routes: Routes = [
  // Public routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },

  // Private routes
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'gallery', component: GalleryComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
