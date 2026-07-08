import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MyWork } from '../my-work/my-work';
import { Header } from '../header/header';
import { MySkills } from '../my-skills/my-skills';
import { Footer } from '../footer/footer';
import { Divider } from '../divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe, MyWork, Header, MySkills, Footer, Divider, RevealDirective],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
