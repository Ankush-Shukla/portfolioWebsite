import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from '../divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';

interface Inspiration {
  name: string;
  role: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-inspiration-page',
  imports: [CommonModule, Divider, RevealDirective],
  templateUrl: './inspiration-page.html',
  styleUrl: './inspiration-page.css',
})
export class InspirationPage {
  // Add more names any time — same shape, no new markup needed.
  protected readonly people: Inspiration[] = [
    {
      name: 'Manu Arora',
      role: 'Founder, Aceternity UI',
      description:
        "Builds beautiful, well-crafted UI components and design systems for developers — a real influence on how this site looks and feels.",
      link: 'https://www.manuarora.in',
    },
    {
      name: 'Raj Vikramaditya (Striver)',
      role: 'Founder, takeUforward',
      description:
        'Ex-Google engineer teaching DSA and interview prep to well over a million learners, mostly for free.',
      link: 'https://takeuforward.org',
    },
    {
      name: 'Harkirat Singh',
      role: 'Founder, 100xDevs',
      description:
        'Mentors developers through hands-on, project-based cohorts covering full-stack development, DevOps, and system design.',
      link: 'https://harkirat.classx.co.in',
    },
  ];
}
