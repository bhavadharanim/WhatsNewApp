import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-whatsapp-page',
  templateUrl: './whatsapp-page.component.html',
  styleUrls: ['./whatsapp-page.component.css']
})

export class WhatsappPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ClientImage:Object=[
    {name:"../../assets/Client1.jpg"},
    {name:"../../assets/Client3.jpg"},
    {name:"../../assets/Client4.jpg"},
    {name:"../../assets/Client5.jpg"},
    {name:"../../assets/Client6.jpg"},
    {name:"../../assets/Client7.jpg"},
    {name:"../../assets/Client9.jpg"},
    {name:"../../assets/Client10.jpg"}
  ];
   myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  foods: Food[] = [
    {value: 'additional_info-0', viewValue: 'Your Profile'},
    {value: 'settings', viewValue: 'Help'},
    {value: 'logout', viewValue: 'Logout'}
  ];
}