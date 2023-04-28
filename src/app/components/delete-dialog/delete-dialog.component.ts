import { Component } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>){}


  onClose(confirm: boolean){
    this.dialogRef.close(confirm)
  }

}
