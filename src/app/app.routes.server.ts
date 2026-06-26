import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Client },
  { path: 'menu', renderMode: RenderMode.Client },
  { path: 'events', renderMode: RenderMode.Client },
  { path: 'book', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Client },
];
