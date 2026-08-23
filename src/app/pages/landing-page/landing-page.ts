import { Component } from '@angular/core';
import { AboutMe } from '../../components/about-me/about-me';
import { MyWork } from '../../components/my-work/my-work';
import { Header } from '../../components/header/header';
import { MySkills } from '../../components/my-skills/my-skills';
import { Footer } from '../../components/footer/footer';
import { Divider } from '../../components/divider/divider';
import { RevealDirective } from '../../shared/reveal.directive';
import { MyExperience } from "../../components/my-experience/my-experience";

@Component({
  selector: 'app-landing-page',
  imports: [AboutMe, MyWork, Header, MySkills, Footer, Divider, RevealDirective, MyExperience],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
