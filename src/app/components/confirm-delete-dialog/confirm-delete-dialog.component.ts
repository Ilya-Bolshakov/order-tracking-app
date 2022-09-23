import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  isDeleted: boolean;
  error!: string;
  hasError: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) private data:number, 
  private matDialog: MatDialogRef<ConfirmDeleteDialogComponent>, 
  private service: OrdersService,
  private router: Router) {
    this.isDeleted = false;
    this.hasError = false;
   }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.service.deleteOrder(this.data).subscribe({
      next: () => {
        this.router.navigate(["/orderList"]);
        this.isDeleted = true;
      },
      error: (http: HttpErrorResponse) => {
        this.hasError = true;
        this.error = http.error.error;
      }
    });
  }

  close() {
    this.matDialog.close();
  }

  closeWithDelete() {
    this.matDialog.close();
  }

}
