import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// importamos el servicio
import {SharedService} from '../shared.service'
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;
  sent: boolean = false;
  // aquí definimos la variable tipo array que contendrá los contactos. 
  contacts:[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    // metemos el servicio para que cargue con el constructor
    private sharedService: SharedService
    ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      message: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(300)]]
    });
    this.sharedService.sharedContacts.subscribe(contacts => this.contacts = contacts)
  }

  

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.sent = true;
    this.contacts.push(this.contactForm.value);
    console.log(this.contacts);
    this.contactForm.reset();
  }
  restartForm(){
    this.submitted = false; 
    this.sent = false; 
  }
}
