import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HoverCardService } from './hover-card.service';
import { HoverCardState } from './hover-card.model';

@Component({
  selector: 'app-hover-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hover-card.html',
  styleUrl: './hover-card.css',
})
export class HoverCard implements AfterViewInit {
  state$: Observable<HoverCardState>;

  @ViewChild('card', { static: false }) cardRef?: ElementRef<HTMLElement>;

  adjustedLeft = 0;
  adjustedTop = 0;
  private raf?: number;

  constructor(private readonly hoverCardService: HoverCardService) {
    this.state$ = this.hoverCardService.state$;
  }

  ngAfterViewInit(): void {
    this.state$.subscribe((state) => this.updatePosition(state));
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

      this.adjustedLeft = Math.max(12, targetLeft);
      this.adjustedTop = Math.max(12, targetTop);
    });
  }
}
