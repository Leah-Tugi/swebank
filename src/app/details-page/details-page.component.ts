import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  public fullName: string="";
  constructor() { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem("fullName")!;
  }

}
