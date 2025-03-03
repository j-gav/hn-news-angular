import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '@hn-news/hn-news-data-access';
import { HN_NEWS_API_TOP_STORIES_URL, HN_NEWS_API_NEW_STORIES_URL, HN_NEWS_API_BEST_STORIES_URL } from '@hn-news/hn-news-model';

@Component({
  selector: 'hn-filter-pane',
  imports: [CommonModule],
  templateUrl: './filter-pane.component.html',
  styleUrl: './filter-pane.component.css',
})
export class FilterPaneComponent {
  private StoriesService = inject(StoriesService);

  public HN_NEWS_API_TOP_STORIES_URL = HN_NEWS_API_TOP_STORIES_URL;
  public HN_NEWS_API_NEW_STORIES_URL = HN_NEWS_API_NEW_STORIES_URL;
  public HN_NEWS_API_BEST_STORIES_URL = HN_NEWS_API_BEST_STORIES_URL;

  onApiChange(event: Event) {
    const apiUrl = (event.target as HTMLSelectElement).value;
    this.StoriesService.setApiUrl(apiUrl);
  }
}
