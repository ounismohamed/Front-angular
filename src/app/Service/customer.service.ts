import {customer} from '../customer/customer.component';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {last} from '@angular/router/src/utils/collection';
import {post} from 'selenium-webdriver/http';
import {Customer} from '../model/Customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    url = 'http://localhost:8080/api/clients';

    constructor(private http: HttpClient) {
    }


    getClients(): Observable<any> {
        return this.http.get<any[]>(this.url);
    }

    /* postCustomer(user): Observable<any> {
       const headers = new HttpHeaders({
         ContentType: "application/json"
       });

       return this.http.post(this.url + "users", user, { headers: headers });
     }*/
    addClient(customer: Customer) {
        this.http.post(this.url, customer)

            .subscribe(res => console.log('Done'));
    }

    deleteClient(id) {
        return this
            .http
            .delete(this.url + '/' + id);
    }

    getClient(id) {
        return this.http.get(this.url + '/' + id);
    }


    updateClient( client: Customer): Observable<void> {
        console.log("id : "+client.nom);
        console.log("etat : "+client.etat_Civil);
        return this.http.put<void>(this.url + '/' + client.id, client, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

}
