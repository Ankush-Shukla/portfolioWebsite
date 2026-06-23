import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOGOS } from './logos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css',
})
export class MySkills {
  logos = LOGOS;

  altFromPath(path: string): string {
    const parts = path.split('/');
    const name = parts[parts.length - 1] || '';
    const base = name.split('.')[0] || '';
    return base.replace(/[-_()]+/g, ' ').trim();
  }
}
