import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '.app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    // console.log(this.data);
  }

  public onConfirm(): void {
    this.dialogRef.close(true);
  }

  public onDeny(): void {
    this.dialogRef.close(false);
  }

}
