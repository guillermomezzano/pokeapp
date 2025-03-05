import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
// Importa este si usas <button mat-button>
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-favorite-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule, // <-- para usar el mat-button
  ],
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
