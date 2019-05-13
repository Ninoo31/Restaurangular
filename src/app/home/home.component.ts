import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people = '/assets/images/people-eating2.jpg';

  constructor() { }

  ngOnInit() {
  }

}
