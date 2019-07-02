// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { ProjectsGuard } from './projects/projects.guard';

// Components
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsGeneralComponent } from './projects/projects-general/projects-general.component';
import { ProjectsMobileComponent } from './projects/projects-mobile/projects-mobile.component';
import { ProjectsWebComponent } from './projects/projects-web/projects-web.component';
import { ServicesComponent } from './services/services.component';

// Routes
const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsGeneralComponent, canActivate: [ProjectsGuard] },
  { path: 'projects/mobile', component: ProjectsMobileComponent },
  { path: 'projects/web', component: ProjectsWebComponent },
  { path: '**', redirectTo: 'services' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
