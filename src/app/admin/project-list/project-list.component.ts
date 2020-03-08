import { Component, OnInit } from '@angular/core';
import {ContactComponent} from '../../contact/contact.component'
import {SharedService} from '../../shared.service'; 

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  contacts:[] = []; 
  constructor(
    private sharedService: SharedService 
  ) { }

  ngOnInit(): void {
    this.sharedService.sharedContacts.subscribe(contacts => this.contacts = contacts)
  }

  newContact(){
    this.sharedService.nextContacts(this.contacts)
  }

}
