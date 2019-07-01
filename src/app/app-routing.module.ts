import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { ProjectsGuard } from './projects/projects.guard';

// Components
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ProjectsGuard] },
  { path: '**', redirectTo: 'services' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
