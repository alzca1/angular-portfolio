import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  // primero creo una variable privada igual a "new BehaviourSubject" con un array vacío (es el tipo de contenido que tendrá)
  // como argumento. 
  // luego creo una variable donde se compartirán los datos. Dicha variable hará que contacts se fije como observable
  // con el método asObservable()
  private contacts = new BehaviorSubject([]);
  sharedContacts = this.contacts.asObservable(); 

  constructor() {}
  // definimos una función que recogerá los cambios en la variable del otro componente y la introducirá en contacts
  nextContacts(contacts: []){
    this.contacts.next(contacts);
    console.log(contacts)
  }
}
