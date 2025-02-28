import { Story } from '@hn-news/hn-news-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private stories: Story[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  getStories: Observable<Story[]> = new Observable((subscriber) => {
    subscriber.next(this.stories);

    setInterval(() => {
      subscriber.next(this.stories.reverse());
    }, 2000);
  });
}
