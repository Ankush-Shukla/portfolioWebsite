import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { NavBar } from '../nav-bar/nav-bar';
import { MyWork } from '../my-work/my-work';
import { Header } from '../header/header';
import { MySkills } from '../my-skills/my-skills';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { Divider } from '../divider/divider';
// import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe,NavBar,MyWork,Header,MySkills,Contact,Footer,Divider,],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
