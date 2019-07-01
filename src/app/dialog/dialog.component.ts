import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '.portfolio-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  public onConfirm(): void {
    this.dialogRef.close(true);
  }

  public onDeny(): void {
    this.dialogRef.close(false);
  }

}
