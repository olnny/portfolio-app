// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Components
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MediaGridComponent } from './media-grid/media-grid.component';

@NgModule({
  declarations: [
    MediaGridComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MediaGridComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
