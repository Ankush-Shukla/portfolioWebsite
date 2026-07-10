import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Divider } from '../divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';
import { BLOG_POSTS } from '../../shared/blog-posts.data';

interface LinkedInEntry {
  caption: string;
  date: string;
  url: string;
}

@Component({
  selector: 'app-writing-page',
  imports: [CommonModule, RouterLink, Divider, RevealDirective],
  templateUrl: './writing-page.html',
  styleUrl: './writing-page.css',
})
export class WritingPage {
  // Posts live in shared/blog-posts.data.ts — add real ones there and they
  // show up here automatically, each opening on its own page on this site.
  protected readonly posts = BLOG_POSTS;

  // Add links to your own LinkedIn posts here — caption is your own one-line summary.
  protected readonly linkedinPosts: LinkedInEntry[] = [];
}