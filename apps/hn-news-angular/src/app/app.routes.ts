import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@hn-news-angular/stories').then((m) => m.StoriesComponent),
  },
];
