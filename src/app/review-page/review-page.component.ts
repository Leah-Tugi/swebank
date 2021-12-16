import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

   public fullName: string="";
   public userEmail: string="";
   public phoneNumber: string="";


  constructor() { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem("fullName")!;
    this.userEmail = localStorage.getItem("userEmail")!;
    this.phoneNumber = localStorage.getItem("phoneNumber")!;

  }
}
