import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '@hn-news/hn-news-model';
import { HN_NEWS_API_STORY_URL } from '@hn-news/hn-news-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private http = inject(HttpClient);

  public getStoryDetails(storyId: string): Observable<Story> {
    console.log('Getting details for', storyId);

    return this.http.get<Story>(`${HN_NEWS_API_STORY_URL}/${storyId}.json`);
  }
}
