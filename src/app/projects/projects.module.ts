import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProjectsGeneralComponent } from './projects-general/projects-general.component';
import { ProjectsMobileComponent } from './projects-mobile/projects-mobile.component';
import { ProjectsWebComponent } from './projects-web/projects-web.component';

@NgModule({
  declarations: [
    ProjectsGeneralComponent,
    ProjectsMobileComponent,
    ProjectsWebComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsGeneralComponent,
    ProjectsMobileComponent,
    ProjectsWebComponent
  ]
})
export class ProjectsModule { }
