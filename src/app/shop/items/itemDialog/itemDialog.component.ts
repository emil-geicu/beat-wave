import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-itemDialog',
  templateUrl: './itemDialog.component.html',
  styleUrl: './itemDialog.component.css',
})
export class ItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
