import { Component } from '@angular/core';

import { DataRepositoryService } from "../services/data-repository";

@Component({
  selector: 'nav-bar',
  styleUrls: [`../styles/nav-bar.css`],
  template: `
    <div class="nav-bar">
      <img class="logo" src="/assets/images/cropped-malmo-squash_logo.png" alt="Logo" />
      <div class="nav-item"><a [routerLink]="['/catalog']">Malmö</a></div>
      <account-menu [user]="currentUser" (signedOut)="handleSignOut()"></account-menu>
    </div>
    
`

})

export class NavBarComponent  {
  constructor(private dataRepository:DataRepositoryService) {}

  get currentUser() {
    return this.dataRepository.currentUser;
  }

  handleSignOut() {
    this.dataRepository.currentUser = null;
  }
}
