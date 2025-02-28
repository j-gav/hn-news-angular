import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '@hn-news/hn-news-data-access';
import { HN_NEWS_API_TOP_STORIES_URL } from '@hn-news/hn-news-model';
import { HN_NEWS_API_NEW_STORIES_URL } from '@hn-news/hn-news-model';
import { HN_NEWS_API_BEST_STORIES_URL } from '@hn-news/hn-news-model';

@Component({
  selector: 'lib-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements OnInit {
  public isFetchingData = false;
  private storyIds: string[] = [];
  private storyService = inject(StoryService);
  public pagedStories: string[] = [];

  public HN_NEWS_API_TOP_STORIES_URL = HN_NEWS_API_TOP_STORIES_URL;
  public HN_NEWS_API_NEW_STORIES_URL = HN_NEWS_API_NEW_STORIES_URL;
  public HN_NEWS_API_BEST_STORIES_URL = HN_NEWS_API_BEST_STORIES_URL;

  ngOnInit() {
    this.storyService.stories$.subscribe((stories) => {
      this.storyIds = stories;
      this.pagedStories = this.storyIds.splice(0, 10);
    });
  }

  onApiChange(event: Event) {
    const apiUrl = (event.target as HTMLSelectElement).value;
    this.storyService.setApiUrl(apiUrl);
  }
}
