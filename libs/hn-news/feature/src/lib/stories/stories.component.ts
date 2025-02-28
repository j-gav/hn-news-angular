import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '@hn-news/hn-news-data-access';
import { Story } from '@hn-news/hn-news-model';

@Component({
  selector: 'lib-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements OnInit {
  public isFetchingData = false;
  public storyIds: Story[] = [];
  private storyService = inject(StoryService);

  ngOnInit() {
    this.storyIds = this.storyService.getStories();
  }
}
