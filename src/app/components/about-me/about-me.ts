import { Component } from '@angular/core';
import { HoverCardDirective } from '../hover-card/hover-card.directive';
import { HoverCardData } from '../hover-card/hover-card.model';

@Component({
  selector: 'app-about-me',
  imports: [HoverCardDirective],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  protected readonly wordMeanings: Record<string, HoverCardData> = {
    curiosity: {
      title: 'Curiosity',
      subtitle: 'noun',
      description: 'A strong desire to explore, question, and understand how things work.',
    },
    learning: {
      title: 'Learning',
      subtitle: 'noun',
      description: 'The ongoing process of gaining new knowledge or skills through study and practice.',
    },
    complexProblems: {
      title: 'Complex problems',
      subtitle: 'phrase',
      description: 'Challenges made of many interconnected parts, with no single obvious solution.',
    },
    problemSolvingMindset: {
      title: 'Problem-solving mindset',
      subtitle: 'phrase',
      description: 'An approach centered on breaking challenges down and finding practical, workable solutions.',
    },
    growth: {
      title: 'Growth',
      subtitle: 'noun',
      description: 'Steady progress in skill, understanding, or capability over time.',
    },
    meaningfulProducts: {
      title: 'Meaningful products',
      subtitle: 'phrase',
      description: 'Things built to genuinely help or improve the lives of the people who use them.',
    },
  };
}
