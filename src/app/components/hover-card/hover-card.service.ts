import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private stateSubject = new BehaviorSubject<HoverCardState>(initialState);
  readonly state$ = this.stateSubject.asObservable();
  private showTimeout?: ReturnType<typeof setTimeout>;
  private pendingData?: HoverCardData;
  private pendingTemplate?: TemplateRef<unknown>;

  show(data: HoverCardData = {}, template?: TemplateRef<unknown>, delay = 180): void {
    this.cancelPendingShow();
    this.pendingData = data;
    this.pendingTemplate = template;
    this.showTimeout = window.setTimeout(() => {
      const previous = this.stateSubject.value;
      this.stateSubject.next({
        ...previous,
        visible: true,
        data: this.pendingData,
        template: this.pendingTemplate,
      });
      this.showTimeout = undefined;
    }, delay);
  }

  hide(): void {
    this.cancelPendingShow();
    this.stateSubject.next({
      ...this.stateSubject.value,
      visible: false,
      data: undefined,
      template: undefined,
      loading: false,
    });
  }

  move(x: number, y: number): void {
    const current = this.stateSubject.value;
    this.stateSubject.next({
      ...current,
      x,
      y,
    });
  }

  private cancelPendingShow(): void {
    if (this.showTimeout !== undefined) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }
  }
}
