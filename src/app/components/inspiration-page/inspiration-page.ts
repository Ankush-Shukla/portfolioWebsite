import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from '../divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';

interface Inspiration {
  name: string;
  role: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-inspiration-page',
  imports: [CommonModule, Divider, RevealDirective],
  templateUrl: './inspiration-page.html',
  styleUrl: './inspiration-page.css',
})
export class InspirationPage {
  // Add more names any time — same shape, no new markup needed.
  protected readonly people: Inspiration[] = [
   {
  name: 'Tokyo Spliff',
  role: 'Crazyy Graphics programmer',
  description: 'Found this gem of a channel a while back when I was building my sorting visualiser project and came across his video about graphics programming',
  link: 'https://www.youtube.com/@tokyospliff'
},
{
  name: 'Danni Dev',
  role: 'An awesome game developer',
  description: 'He is the reason I got into game dev, all his videos were so intriguing and it created that curiosity to build something',
  link: 'https://www.youtube.com/@Danidev'
},
{
  name: '3Blue1Brown',
  role: 'Visual math wizard',
  description: 'Makes the most beautiful animations that finally made me understand concepts I thought I would never get',
  link: 'https://www.youtube.com/@3blue1brown'
},
{
  name: 'Ben Eater',
  role: 'Hardware from scratch legend',
  description: 'Building an entire computer on a breadboard made me fall in love with how machines actually work at the lowest level',
  link: 'https://www.youtube.com/@BenEater'
},
{
  name: 'Michael Reeves',
  role: 'One of my most fav chaotic coders',
  description: 'Absolute chaos combined with real programming skill – every project is pure entertainment and somehow educational at the same time',
  link: 'https://www.youtube.com/@MichaelReeves'
},
{
  name: 'Daniel Hirsch',
  role: 'No-nonsense low-level coder',
  description: 'Straight-to-the-point C programming and reverse engineering content that actually teaches you how stuff works under the hood',
  link: 'https://www.youtube.com/@HirschDaniel'
},
{
  name: 'CodeAesthetic',
  role: 'Clean code philosopher',
  description: 'Short, sharp videos that completely changed how I think about writing readable and maintainable code',
  link: 'https://www.youtube.com/@CodeAesthetic'
},
{
  name: 'Magicalbat',
  role: 'Insanely fast C wizard',
  description: 'Watching him type entire complex projects in C at lightning speed with almost zero errors is pure motivation and skill porn',
  link: 'https://www.youtube.com/@Magicalbat'
},
{
  name: 'James Scholz',
  role: 'Study-with-me motivator',
  description: 'Got me into studying and actually liking it – his long focus sessions made deep work feel normal',
  link: 'https://www.youtube.com/@JamesScholz'
},
{
  name: 'Tsoding',
  role: 'One of my fav recreational programmers',
  description: 'Pure joy of programming. Building random cool stuff live from scratch with zero corporate fluff',
  link: 'https://www.youtube.com/@Tsoding'
},
{
  name: 'Harkirat Singh',
  role: 'Full-stack & career mentor',
  description: 'Real talk about tech careers, projects, and the journey after college that actually feels honest and useful',
  link: 'https://www.youtube.com/@harkirat1'
},
{
  name: 'Sebastian Lague',
  role: 'Coding adventure master',
  description: 'The most beautiful and thoughtful coding experiments – every video feels like a little adventure in code',
  link: 'https://www.youtube.com/@SebastianLague'
},
{
  name: 'Bit Lemon',
  role: 'Computer architecture explainer',
  description: 'Clear and animated explanations of how CPUs, caches and memory actually work – perfect for understanding the metal',
  link: 'https://www.youtube.com/@BitLemonSoftware'
},
{
  name: 'ThePrimeagen',
  role: 'Vim + performance evangelist',
  description: 'Loud, opinionated and somehow always right about tooling, performance and not over-engineering',
  link: 'https://www.youtube.com/@ThePrimeagen'
},
{
  name: 'Joma Tech',
  role: 'Silicon Valley storyteller',
  description: 'Funny and realistic takes on tech jobs, interviews and life at big companies that made the industry feel human',
  link: 'https://www.youtube.com/@jomatech'
},
{
  name: 'Minecraft',
  role: 'The original coding gateway',
  description: 'Creating modpacks and just tinkering with the game is what actually got me into coding in the first place',
  link: 'https://www.youtube.com/@Minecraft'
},
{
  name: 'All my teachers',
  role: 'The real OGs',
  description: 'Ofc all my teachers – the ones who put up with my questions and somehow made me keep going',
  link: ''
}

  ];
}
