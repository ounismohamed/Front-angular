import {BrowserModule} from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterByPipe} from './filter-by.pipe';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {CustomerComponent} from './customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from './Service/customer.service';
import {MatTableModule} from '@angular/material/table';
import {
    MAT_DIALOG_DATA,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatConfirmDialogComponent} from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterByPipe,
    FormulaireComponent,
    CustomerComponent,
    MatConfirmDialogComponent,
    UpdateCustomerComponent
  ],
  
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
   AppRoutingModule,
   MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    
   
    MatTableModule,
    MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSortModule, 
  MatPaginatorModule,
  MatRadioModule,
  MatCheckboxModule
  ],
  providers: [
    CustomerService , 
    , {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    },
      {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => FormulaireComponent),
      }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MatConfirmDialogComponent,
    FormulaireComponent,
    UpdateCustomerComponent
  ]
})
export class AppModule { }
