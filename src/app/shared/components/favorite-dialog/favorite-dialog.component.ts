import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

//mui
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-favorite-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './favorite-dialog.component.html',
})
export class FavoriteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FavoriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
