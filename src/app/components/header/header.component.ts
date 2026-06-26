import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a routerLink="/" (click)="navigate('/')" class="flex items-center gap-3">
          <img src="logo.jpg" alt="Traditional Cafe" class="w-10 h-10 rounded-full object-cover">
          <span class="text-amber-500 font-bold text-xl">Traditional Cafe</span>
        </a>
        <button (click)="menuOpen = !menuOpen" class="md:hidden text-white text-2xl">☰</button>
        <ul [class.hidden]="!menuOpen" class="md:flex gap-6 absolute md:static top-14 left-0 w-full md:w-auto bg-[#0e0e10] md:bg-transparent p-4 md:p-0 list-none border-b border-white/5 md:border-none">
          @for (link of links; track link.path) {
            <li><a [routerLink]="link.path" (click)="navigate(link.path)" routerLinkActive="text-amber-500" [routerLinkActiveOptions]="{exact: link.path === '/'}" class="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium block py-2 md:py-0">{{link.label}}</a></li>
          }
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  menuOpen = false;
  links = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/book', label: 'Book a Table' },
  ];

  navigate(path: string) {
    this.menuOpen = false;
  }
}
