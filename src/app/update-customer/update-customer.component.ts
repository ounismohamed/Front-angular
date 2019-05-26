import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {CustomerService} from '../Service/customer.service';
import {DialogService} from '../Service/dialog.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/Customer';

@Component({
    selector: 'app-update-customer',
    templateUrl: './update-customer.component.html',
    styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

    client: Customer;
    @ViewChild(MatSort) sort: MatSort;

    public dataSource = new MatTableDataSource<any>();
    route: any;

    customerForm: FormGroup;

    constructor(private CustomerService: CustomerService, dialog: MatDialog,
                private DialogService: DialogService,
                public dialogRef: MatDialogRef<UpdateCustomerComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        console.log(this.data);
        this.initForm();
        this.CustomerService.getClient(this.data.data).subscribe(
            res => {
                this.client = <any>res;

                this.prepareForm(this.client);
                console.log('nom : ' + this.client.nom);

            },
            err => {
                console.log(err);
            }
        );

        this.refresh();
    }

    prepareForm(customer: Customer) {
        this.customerForm.controls.nom.setValue(customer.nom);
        this.customerForm.controls.prenom.setValue(customer.prenom);
        this.customerForm.controls.sexe.setValue(customer.sexe);
        this.customerForm.controls.age.setValue(customer.age);
        this.customerForm.controls.adresse.setValue(customer.adresse);
        this.customerForm.controls.etat.setValue(customer.etat_Civil);
        this.customerForm.controls.carteC.setValue(customer.carte_Credit);
        this.customerForm.controls.carteF.setValue(customer.carte_Fidelite);
        this.customerForm.controls.telephone.setValue(customer.telephone);
    }

    initForm() {
        this.customerForm = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            sexe: ['', Validators.required],
            age: ['', Validators.required],
            adresse: ['', Validators.required],
            etat: ['', Validators.required],
            carteC: ['', Validators.required],
            carteF: ['', Validators.required],
            telephone: ['', Validators.required]
        });
    }

    refresh() {
        this.dataSource.sort = this.sort;
        this.CustomerService.getClients().subscribe(
            clients => this.dataSource.data = clients,
            error => console.log('error')
        );
    }

    updateClient() {
        this.DialogService.openConfirmDialog('Êtes-vous sûr de mettre à jour ce client ?')
            .afterClosed().subscribe(res => {
            if (res) {
                this.client.nom = this.customerForm.controls.nom.value;
                this.client.prenom = this.customerForm.controls.prenom.value;
                this.client.age = this.customerForm.controls.age.value;
                this.client.adresse = this.customerForm.controls.adresse.value;
                this.client.telephone = this.customerForm.controls.telephone.value;
                this.client.sexe = this.customerForm.controls.sexe.value;
                this.client.etat_Civil = this.customerForm.controls.etat.value;
                this.client.carte_Fidelite = this.customerForm.controls.carteF.value;
                this.client.carte_Credit = this.customerForm.controls.carteC.value;
                this.CustomerService.updateClient(this.client).subscribe(
                    res => {
                        this.dialogRef.close();


                    }
                );
            }
        });
    }
} 




