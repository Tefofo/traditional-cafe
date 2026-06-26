import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a routerLink="/" class="text-amber-500 font-bold text-xl">Traditional Cafe</a>
        <button (click)="menuOpen = !menuOpen" class="md:hidden text-white text-2xl">☰</button>
        <ul [class.hidden]="!menuOpen" class="md:flex gap-6 absolute md:static top-14 left-0 w-full md:w-auto bg-[#0e0e10] md:bg-transparent p-4 md:p-0 list-none border-b border-white/5 md:border-none">
          @for (link of links; track link.path) {
            <li><a [routerLink]="link.path" routerLinkActive="text-amber-500" [routerLinkActiveOptions]="{exact: link.path === '/'}" class="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium">{{link.label}}</a></li>
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
    { path: '/book', label: 'Book a Table' },
  ];
}
