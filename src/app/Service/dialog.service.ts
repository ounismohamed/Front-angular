import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material";
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog : MatDialog) { }
  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent, {
     width: '390px',
     disableClose: true,
     position: { top: "10px" },
     data :{
      message : msg
    }
    });

  }
}
