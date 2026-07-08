import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from '../divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';

interface WritingEntry {
  title: string;
  summary: string;
  date: string;
  tag: 'Blog' | 'Research';
  link: string;
}

interface LinkedInEntry {
  caption: string;
  date: string;
  url: string;
}

@Component({
  selector: 'app-writing-page',
  imports: [CommonModule, Divider, RevealDirective],
  templateUrl: './writing-page.html',
  styleUrl: './writing-page.css',
})
export class WritingPage {
  // Add real posts here as you publish them — each becomes a card below.
  // Example:
  // { title: 'Why I switched to zoneless Angular', summary: '...', date: 'Jul 2026', tag: 'Blog', link: 'https://...' }
  protected readonly posts: WritingEntry[] = [];

  // Add links to your own LinkedIn posts here — caption is your own one-line summary.
  // Example: { caption: 'Shared my thoughts on...', date: 'Jul 2026', url: 'https://www.linkedin.com/posts/...' }
  protected readonly linkedinPosts: LinkedInEntry[] = [
   
  ];
}
