import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  @ViewChild('fullName')nameKey!:ElementRef;
  @ViewChild('userEmail')emailKey!:ElementRef;
  @ViewChild('phoneNumber')phoneKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  fillForm(){
    localStorage.setItem("fullName",this.nameKey.nativeElement.value);
    localStorage.setItem("userEmail",this.emailKey.nativeElement.value);
    localStorage.setItem("phoneNumber",this.phoneKey.nativeElement.value);

    
  }

}
