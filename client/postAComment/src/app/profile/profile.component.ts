import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public loggedUser: any;

  constructor(private localstorage: LocalStorage) { }

  ngOnInit() {

    this.localstorage.getItem('user').subscribe((user) => {
      this.loggedUser = user
    })
  }

}
