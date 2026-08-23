import { NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive,NgIf],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
isDark = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }

    document.documentElement.classList.toggle(
      'dark',
      this.isDark
    );
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    document.documentElement.classList.toggle(
      'dark',
      this.isDark
    );

    localStorage.setItem(
      'theme',
      this.isDark ? 'dark' : 'light'
    );
  }
}
