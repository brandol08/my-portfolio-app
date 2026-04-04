import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Assuming you will create a CSS file for styles
})
export class HeaderComponent {
  title: string = 'My Portfolio';
  subtitle: string = 'Welcome to my personal portfolio website';

  constructor() {}

  // Add any methods related to the header functionality here
}