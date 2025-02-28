import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '@hn-news/hn-news-data-access';
import { HN_NEWS_API_TOP_STORIES_URL } from '@hn-news/hn-news-model';
import { HN_NEWS_API_NEW_STORIES_URL } from '@hn-news/hn-news-model';
import { HN_NEWS_API_BEST_STORIES_URL } from '@hn-news/hn-news-model';
import { LoaderComponent } from '@hn-news/shared-ui';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'hn-stories',
  standalone: true,
  imports: [CommonModule, LoaderComponent, StoryComponent],
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
      this.pagedStories = this.storyIds.splice(0, 12);
    });

    this.storyService.isLoading$.subscribe((isLoading) => {
      this.isFetchingData = isLoading;
    });
  }

  onApiChange(event: Event) {
    const apiUrl = (event.target as HTMLSelectElement).value;
    this.storyService.setApiUrl(apiUrl);
  }
}
