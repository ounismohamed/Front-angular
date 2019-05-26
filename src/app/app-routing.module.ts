import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [ { path: 'home',       component: CustomerComponent },
{ path: 'create',     component: FormulaireComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
