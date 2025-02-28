import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { HN_NEWS_API_TOP_STORIES_URL } from '@hn-news/hn-news-model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private storiesSubject = new BehaviorSubject<string[]>([]);
  private apiUrl = new BehaviorSubject<string>(HN_NEWS_API_TOP_STORIES_URL);
  private http = inject(HttpClient);

  public stories$: Observable<string[]> = this.storiesSubject.asObservable();

  constructor() {
    this.apiUrl.pipe(switchMap((apiUrl) => this.http.get<string[]>(apiUrl))).subscribe((stories) => {
      this.storiesSubject.next(stories);
    });
  }

  setApiUrl(apiUrl: string): void {
    this.apiUrl.next(apiUrl);
  }
}
