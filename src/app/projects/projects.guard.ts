import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Injectable({ providedIn: 'root'})
export class ProjectsGuard implements CanActivate {

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  public canActivate(): Observable<boolean> {
    const dialog = this.dialog.open(ConfirmDialogComponent, {data: 'Do you really want to see Projects?'});
    return dialog.afterClosed();
  }

}
