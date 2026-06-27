import { Component, input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: './divider.html',
  styleUrl: './divider.css'
})
export class Divider {
  title = input.required<string>();
}