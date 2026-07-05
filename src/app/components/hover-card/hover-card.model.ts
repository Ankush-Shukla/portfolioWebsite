import { TemplateRef } from '@angular/core';

export interface HoverCardData {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tags?: string[];
  footer?: string;
  type?: string;
  template?: TemplateRef<unknown>;
}

export interface HoverCardState {
  visible: boolean;
  x: number;
  y: number;
  data?: HoverCardData;
  template?: TemplateRef<unknown>;
  loading?: boolean;
}
