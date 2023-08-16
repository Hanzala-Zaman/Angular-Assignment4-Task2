import { Component } from '@angular/core';
import {UsersdataService} from '../usersdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users: any
  constructor (private usersData:UsersdataService) 
  {
    this.usersData.users().subscribe((data) =>
    {
      console.log(data)
      this.users = data;
    })
  }

}
