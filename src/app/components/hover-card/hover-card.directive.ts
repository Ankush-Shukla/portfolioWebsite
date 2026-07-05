import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
import { HoverCardData } from './hover-card.model';
import { HoverCardService } from './hover-card.service';

@Directive({
  selector: '[appHoverCard]',
  standalone: true,
})
export class HoverCardDirective {
  @Input() hoverCard?: HoverCardData;
  @Input('template') hoverCardTemplate?: TemplateRef<unknown>;

  constructor(private readonly hoverCardService: HoverCardService) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this.hoverCardService.move(event.clientX, event.clientY);
    this.hoverCardService.show(this.hoverCard ?? {}, this.hoverCardTemplate);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.hoverCardService.move(event.clientX, event.clientY);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hoverCardService.hide();
  }

  @HostListener('focus')
  onFocus(): void {
    this.hoverCardService.show(this.hoverCard ?? {}, this.hoverCardTemplate);
  }

  @HostListener('blur')
  onBlur(): void {
    this.hoverCardService.hide();
  }
}
