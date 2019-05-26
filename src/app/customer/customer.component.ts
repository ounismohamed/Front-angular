import {UpdateCustomerComponent} from './../update-customer/update-customer.component';
import {FormulaireComponent} from './../formulaire/formulaire.component';
import {CustomerService} from '../Service/customer.service';
import {DialogService} from '../Service/dialog.service';
import {MatDialog} from '@angular/material';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


export interface customer {
    nom: string;
    Prenom: string;
    Sexe: string;
    Age: string;
    Adresse: string;
    Telephone: string;
    EtatCivil: string;
    CarteCredit: string;
    Cartefidelite: string;
}


@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    public dataSource = new MatTableDataSource<any>();
    route: any;
    router: any;

    constructor(private CustomerService: CustomerService, private dialog: MatDialog,
                private DialogService: DialogService) {

    }

    displayedColumns = [
        'nom',
        'prenom',
        'sexe',
        'age',
        'adresse',
        'telephone',
        'etat_Civil',
        'carte_Credit',
        'carte_Fidelite',
        'actions',
        'delete'
    ];

    // dataSource = ELEMENT_DATA;

    searchKey: string;

    ngOnInit() {

        this.dataSource.paginator = this.paginator;


        this.refresh();
    }

    formcustomer(): void {
        const dialogRef = this.dialog.open(FormulaireComponent, {
            width: '500px',

        });


        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.refresh();

        });
    }

    refresh() {
        this.dataSource.sort = this.sort;
        return this.CustomerService.getClients().subscribe(
            Client => this.dataSource.data = Client,
            error => console.log('error')
        );
    }

    deleteClient(id) {
        this.DialogService.openConfirmDialog('Êtes-vous sûr de supprimer ce client?')
            .afterClosed().subscribe(res => {
            if (res) {

                this.CustomerService.deleteClient(id).subscribe(res => {
                    console.log('Deleted');
                    this.refresh();
                });
            }
        });
    }


    onSearchClear() {
        this.searchKey = '';
        this.applyFilter();
    }

    applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }


    formUpdate(id: string): void {

        const dialogRef = this.dialog.open(UpdateCustomerComponent, {
            width: '500px',
            data: {data: id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.refresh();

        });
    }

}
 

