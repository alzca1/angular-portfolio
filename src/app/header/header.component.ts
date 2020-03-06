import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-left';
    config.autoClose = false;
   }

  ngOnInit(): void {
  }

}
