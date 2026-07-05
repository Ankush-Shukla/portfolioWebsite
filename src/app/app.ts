import { Component, signal } from '@angular/core';
import { LandingPage } from './components/landing-page/landing-page';
import { HoverCard } from './components/hover-card/hover-card';

@Component({
  selector: 'app-root',
  imports: [LandingPage, HoverCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolioWebsite');
}

