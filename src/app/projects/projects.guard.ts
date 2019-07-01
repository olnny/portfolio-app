import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { DialogComponent } from '../dialog/dialog.component';


@Injectable({ providedIn: 'root'})
export class ProjectsGuard implements CanActivate {

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  public canActivate(): Observable<boolean> {
    const dialog = this.dialog.open(DialogComponent);

    return dialog.afterClosed().pipe(
      tap(result => {
        // tslint:disable-next-line: curly
        if (!result) this.router.navigateByUrl(this.router.url);
      })
    );
  }

}
