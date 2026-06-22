import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
