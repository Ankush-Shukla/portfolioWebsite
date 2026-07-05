import { Injectable, TemplateRef, signal } from '@angular/core';
import { HoverCardData, HoverCardState } from './hover-card.model';

const initialState: HoverCardState = {
  visible: false,
  x: 0,
  y: 0,
};

@Injectable({
  providedIn: 'root',
})
export class HoverCardService {
  private readonly _state = signal<HoverCardState>(initialState);
  readonly state = this._state.asReadonly();

  private showTimeout?: ReturnType<typeof setTimeout>;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  show(data: HoverCardData = {}, template?: TemplateRef<unknown>, delay = 150): void {
    this.cancelPendingHide();
    this.cancelPendingShow();

    if (this._state().visible) {
      // A card is already open — jump straight to the new target, no re-delay or flicker.
      this._state.update((s) => ({ ...s, visible: true, data, template }));
      return;
    }

    this.showTimeout = window.setTimeout(() => {
      this._state.update((s) => ({ ...s, visible: true, data, template }));
      this.showTimeout = undefined;
    }, delay);
  }

  hide(delay = 60): void {
    this.cancelPendingShow();
    this.cancelPendingHide();
    // Small grace period: if a neighboring element shows a card within this window,
    // show() above cancels this timeout and the card never actually disappears.
    this.hideTimeout = window.setTimeout(() => {
      this._state.update((s) => ({ ...s, visible: false, data: undefined, template: undefined }));
      this.hideTimeout = undefined;
    }, delay);
  }

  move(x: number, y: number): void {
    this._state.update((s) => ({ ...s, x, y }));
  }

  private cancelPendingShow(): void {
    if (this.showTimeout !== undefined) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }
  }

  private cancelPendingHide(): void {
    if (this.hideTimeout !== undefined) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }
  }
}
