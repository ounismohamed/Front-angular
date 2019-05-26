import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../Service/customer.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {DialogService} from '../Service/dialog.service';
import {Customer} from '../model/Customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-formulaire',
    templateUrl: './formulaire.component.html',
    styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

    customerForm: FormGroup;

    client:Customer;

    constructor(private CustomerService: CustomerService,
                private http: HttpClient,
                private dialog: MatDialog,
                private DialogService: DialogService,
                private formBuilder: FormBuilder) {

    }


    ngOnInit() {
        this.initForm();

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

    save() {

        this.dialog.closeAll();
    }

    onSubmitForm() {

    }


    addClient() {

        this.DialogService.openConfirmDialog('Êtes-vous sûr d ajouter ce client ?')
            .afterClosed().subscribe(res => {
            if (res) {
                this.client = new Customer(
                    this.customerForm.controls.nom.value,
                    this.customerForm.controls.prenom.value,
                    this.customerForm.controls.age.value,
                    this.customerForm.controls.adresse.value,
                    this.customerForm.controls.telephone.value,
                    this.customerForm.controls.sexe.value,
                    this.customerForm.controls.etat.value,
                    this.customerForm.controls.carteC.value,
                    this.customerForm.controls.carteF.value
                );
                this.CustomerService.addClient(this.client);
                this.save();
            }
        });


    }


}