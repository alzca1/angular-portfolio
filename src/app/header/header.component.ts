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
  public isDropDownCollapsed = true;

  closeAll() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isDropDownCollapsed = !this.isDropDownCollapsed;
  }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-left';
    config.autoClose = true;
   }

  ngOnInit(): void {
  }

}
