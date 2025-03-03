import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '@hn-news/hn-news-data-access';
import { LoaderComponent } from '@hn-news/shared-ui';
import { StoryComponent } from '../story/story.component';
import { FilterPaneComponent } from '../filter-pane/filter-pane.component';

@Component({
  selector: 'hn-stories',
  standalone: true,
  imports: [CommonModule, LoaderComponent, StoryComponent, FilterPaneComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements OnInit {
  public isFetchingData = false;
  private storyIds: string[] = [];
  private StoriesService = inject(StoriesService);
  public pagedStories: string[] = [];

  ngOnInit() {
    this.StoriesService.stories$.subscribe((stories) => {
      this.storyIds = stories;
      this.pagedStories = this.storyIds.splice(0, 12);
    });

    this.StoriesService.isLoading$.subscribe((isLoading) => {
      this.isFetchingData = isLoading;
    });
  }
}
