import { Component, OnInit, signal } from '@angular/core';
import { LandingPage } from './components/landing-page/landing-page';
import { HoverCard } from './components/hover-card/hover-card';

@Component({
  selector: 'app-root',
  imports: [LandingPage, HoverCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('portfolioWebsite');
  protected readonly loading = signal(true);

  ngOnInit(): void {
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => this.loading.set(false), prefersReducedMotion ? 0 : 1100);
  }
}
