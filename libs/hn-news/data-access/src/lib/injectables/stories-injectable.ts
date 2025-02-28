import { Observable } from 'rxjs';
import { Story } from '@hn-news/hn-news-model';

export const StoriesInjectable = (): Observable<Story[]> => {
  return [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
};
