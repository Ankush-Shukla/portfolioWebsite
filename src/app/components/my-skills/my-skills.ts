import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverCardDirective } from '../hover-card/hover-card.directive';
import { LOGOS } from './logos';

interface SkillItem {
  path: string;
  name: string;
  hoverCard: {
    title: string;
    subtitle: string;
    description: string;
    footer: string;
  };
}

const SKILL_DETAILS: Record<string, SkillItem['hoverCard']> = {
  angular: {
    title: 'Angular',
    subtitle: 'Framework',
    description: 'A modern TypeScript framework for building scalable, fast web applications with reusable components.',
    footer: 'Google-backed frontend framework',
  },
  aseprite: {
    title: 'Aseprite',
    subtitle: 'Pixel Art Tool',
    description: 'A pixel art editor for creating sprites, animations, and retro-style game art.',
    footer: 'Great for UI icons and game assets',
  },
  c: {
    title: 'C',
    subtitle: 'Programming Language',
    description: 'A systems programming language used for performance-critical applications and low-level tooling.',
    footer: 'Fast and portable',
  },
  'c-sharp': {
    title: 'C#',
    subtitle: 'Programming Language',
    description: 'A modern object-oriented language from Microsoft used for desktop, web, and game development.',
    footer: 'Common in .NET and Unity applications',
  },
  'c-plus-plus': {
    title: 'C++',
    subtitle: 'Programming Language',
    description: 'A powerful language for systems programming, games, and performance-sensitive applications.',
    footer: 'Used for native apps and game engines',
  },
  css: {
    title: 'CSS',
    subtitle: 'Style Sheet Language',
    description: 'The language used to style and layout web pages with responsive and accessible designs.',
    footer: 'Controls presentation and layout',
  },
  django: {
    title: 'Django',
    subtitle: 'Python Framework',
    description: 'A high-level Python web framework for building secure, maintainable backend applications quickly.',
    footer: 'Ideal for web APIs and dashboards',
  },
  docker: {
    title: 'Docker',
    subtitle: 'Container Platform',
    description: 'A platform that packages applications and dependencies into portable containers for consistent deployment.',
    footer: 'Useful for development and deployment',
  },
  figma: {
    title: 'Figma',
    subtitle: 'Design Tool',
    description: 'A collaborative interface design and prototyping tool used for building visual UI systems.',
    footer: 'Great for mockups and handoffs',
  },
  github: {
    title: 'GitHub',
    subtitle: 'Code Hosting',
    description: 'A service for hosting git repositories, collaboration, code review, and open-source projects.',
    footer: 'Version control and teamwork',
  },
  html: {
    title: 'HTML',
    subtitle: 'Markup Language',
    description: 'The standard language for structuring web content and defining page semantics.',
    footer: 'Creates the structure of web pages',
  },
  java: {
    title: 'Java',
    subtitle: 'Programming Language',
    description: 'A versatile language used for backend services, Android apps, and enterprise systems.',
    footer: 'Strongly typed and cross-platform',
  },
  javascript: {
    title: 'JavaScript',
    subtitle: 'Web Language',
    description: 'The language that powers interactive web experiences in browsers and on the server.',
    footer: 'Dynamic behavior for web apps',
  },
  linux: {
    title: 'Linux',
    subtitle: 'Operating System',
    description: 'An open-source operating system kernel used across servers, development environments, and embedded systems.',
    footer: 'Preferred for development tooling',
  },
  mongodb: {
    title: 'MongoDB',
    subtitle: 'Database',
    description: 'A document database that stores flexible JSON-like data for rapid application development.',
    footer: 'Great for schema-flexible data',
  },
  php: {
    title: 'PHP',
    subtitle: 'Server Language',
    description: 'A scripting language commonly used for building dynamic websites and server-side applications.',
    footer: 'Popular for web backends',
  },
  postgresql: {
    title: 'PostgreSQL',
    subtitle: 'Database',
    description: 'A powerful open-source relational database for structured data and advanced queries.',
    footer: 'Reliable and feature-rich',
  },
  python: {
    title: 'Python',
    subtitle: 'Programming Language',
    description: 'A readable language used for automation, data processing, scripting, and backend systems.',
    footer: 'Excellent for prototyping and backend services',
  },
  'raspberry-pi': {
    title: 'Raspberry Pi',
    subtitle: 'Single-board Computer',
    description: 'A compact computer used for hardware projects, prototyping, and learning embedded development.',
    footer: 'Great for IoT and physical computing',
  },
  react: {
    title: 'React',
    subtitle: 'UI Library',
    description: 'A JavaScript library for building component-based user interfaces with declarative rendering.',
    footer: 'Popular for modern web apps',
  },
  'spring-boot': {
    title: 'Spring Boot',
    subtitle: 'Java Framework',
    description: 'A Java framework for rapidly building production-ready backend services and microservices.',
    footer: 'Simplifies Java server development',
  },
  typescript: {
    title: 'TypeScript',
    subtitle: 'Typed JavaScript',
    description: 'A superset of JavaScript that adds type safety and tooling for building scalable applications.',
    footer: 'Safer JavaScript development',
  },
  'vs-code': {
    title: 'VS Code',
    subtitle: 'Editor',
    description: 'A lightweight code editor with extensible tooling, debugging, and workspace support.',
    footer: 'Fast, extensible, and popular',
  },
  neovim: {
    title: 'Neovim',
    subtitle: 'Editor',
    description: 'A highly configurable terminal-based text editor focused on speed and productivity.',
    footer: 'Keyboard-driven editing workflow',
  },
};

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, HoverCardDirective],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.css',
})
export class MySkills {
  skills: SkillItem[] = LOGOS.map((path) => {
    const name = this.altFromPath(path);
    const key = this.keyFromPath(path);
    const hoverCard = SKILL_DETAILS[key] ?? {
      title: name,
      subtitle: 'Technology',
      description: `A skill I use while building interfaces, tooling, or backend workflows with ${name}.`,
      footer: 'Hover for details',
    };

    return { path, name, hoverCard };
  });

  altFromPath(path: string): string {
    const key = this.keyFromPath(path);
    const specialNames: Record<string, string> = {
      c: 'C',
      'c-sharp': 'C#',
      'c-plus-plus': 'C++',
      'html-5': 'HTML',
      'vs-code': 'VS Code',
      'raspberry-pi': 'Raspberry Pi',
      'spring-boot': 'Spring Boot',
    };

    return specialNames[key] ?? key.replace(/[-_]+/g, ' ').replace(/\b([a-z])/g, (_, ch) => ch.toUpperCase());
  }

  private keyFromPath(path: string): string {
    const decoded = decodeURIComponent(path);
    const parts = decoded.split('/');
    const name = parts[parts.length - 1] || '';
    let key = name.replace(/\.[^.]+$/, '');
    key = key.replace(/^icons8-/, '');

    const variantMatch = key.match(/ \((\d+)\)$/);
    const variant = variantMatch?.[1];
    if (variant) {
      key = key.replace(/ \(\d+\)$/, '');
    }

    key = key.replace(/-\d+$/, '');
    key = key.toLowerCase();
    key = key.replace(/\s+/g, '-');

    if (key.includes('c#') || key === 'csharp') {
      return 'c-sharp';
    }
    if (key.includes('cpp') || key.includes('c++')) {
      return 'c-plus-plus';
    }
    if (key === 'c') {
      return 'c';
    }

    return key;
  }
}
