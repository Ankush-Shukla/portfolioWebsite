import { Component, ElementRef, ViewChild, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverCardService } from './hover-card.service';
import { HoverCardState } from './hover-card.model';

@Component({
  selector: 'app-hover-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hover-card.html',
  styleUrl: './hover-card.css',
})
export class HoverCard {
  private readonly hoverCardService = inject(HoverCardService);

  protected readonly state = this.hoverCardService.state;

  @ViewChild('card', { static: false }) cardRef?: ElementRef<HTMLElement>;

  // Signals (not plain fields) so position updates re-render even though they're
  // written from a requestAnimationFrame callback outside any Angular event —
  // this app is zoneless, and only signal writes are guaranteed to schedule a re-render.
  protected readonly adjustedLeft = signal(0);
  protected readonly adjustedTop = signal(0);

  private raf?: number;

  constructor() {
    effect(() => this.updatePosition(this.state()));
  }

  private updatePosition(state: HoverCardState): void {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }

    this.raf = requestAnimationFrame(() => {
      if (!state.visible) {
        return;
      }

      const cursorX = state.x;
      const cursorY = state.y;
      let targetLeft = cursorX + 20;
      let targetTop = cursorY + 20;

      const cardElement = this.cardRef?.nativeElement;
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (cursorX + rect.width + 24 > windowWidth) {
          targetLeft = cursorX - rect.width - 20;
        }

        if (cursorY + rect.height + 24 > windowHeight) {
          targetTop = cursorY - rect.height - 20;
        }
      }

      this.adjustedLeft.set(Math.max(12, targetLeft));
      this.adjustedTop.set(Math.max(12, targetTop));
    });
  }
}
