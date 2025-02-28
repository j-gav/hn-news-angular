import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { HN_NEWS_API_TOP_STORIES_URL } from '@hn-news/hn-news-model';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private http = inject(HttpClient);

  private storiesSubject = new BehaviorSubject<string[]>([]);
  private loadingStatus = new BehaviorSubject<boolean>(false);
  private apiUrl = new BehaviorSubject<string>(HN_NEWS_API_TOP_STORIES_URL);

  public stories$: Observable<string[]> = this.storiesSubject.asObservable();
  public isLoading$: Observable<boolean> = this.loadingStatus.asObservable();

  constructor() {
    this.apiUrl
      .pipe(
        switchMap((url: string) => {
          this.loadingStatus.next(true);
          return this.http.get<string[]>(url);
        })
      )
      .subscribe((stories: string[]) => {
        this.storiesSubject.next(stories);
        this.loadingStatus.next(false);
      });
  }

  setApiUrl(apiUrl: string): void {
    this.apiUrl.next(apiUrl);
  }
}
