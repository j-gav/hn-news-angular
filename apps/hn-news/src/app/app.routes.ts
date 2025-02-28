import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@hn-news/hn-news-feature').then((m) => m.StoriesComponent),
  },
];
