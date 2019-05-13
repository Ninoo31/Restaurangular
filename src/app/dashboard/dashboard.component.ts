import { Component } from '@angular/core';
import { QuickLunchService } from '../services/quick-lunch.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    {title : 'A la carte', cols:2, rows: 1},
    {title : 'Burger', cols:2, rows: 1},
    {title : 'Galette / Crêpe', cols:2, rows: 1},
    {title : 'Pizza', cols:2, rows: 1}
  ];

  constructor(private quickLunchService: QuickLunchService) {}
}
