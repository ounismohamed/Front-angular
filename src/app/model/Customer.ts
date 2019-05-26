export class Customer {

    id:number;
    nom: string;
    prenom: string;
    age: number;
    adresse: string;
    telephone: number;
    sexe: string;
    etat_Civil: string;
    carte_Fidelite: boolean;
    carte_Credit: boolean;

    constructor(
        nom: string,
        prenom: string,
        age: number,
        adresse: string,
        telephone: number,
        sexe: string,
        etat: string,
        carteF: boolean,
        carteC: boolean
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.adresse = adresse;
        this.telephone = telephone;
        this.sexe = sexe;
        this.etat_Civil = etat;
        this.carte_Fidelite = carteF;
        this.carte_Credit = carteC;
    }
}