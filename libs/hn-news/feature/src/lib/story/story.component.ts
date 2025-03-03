import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '@hn-news/hn-news-data-access';
import { Story } from '@hn-news/hn-news-model';
import { Observable } from 'rxjs';
import { LoaderComponent } from '@hn-news/shared-ui';

@Component({
  selector: 'hn-story',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
})
export class StoryComponent implements OnInit {
  @Input() storyId!: string;
  private storyService = new StoryService();
  public isLoading = true;
  public story$: Observable<Story> | null = null;
  public timeAgo = '';

  ngOnInit() {
    this.story$ = this.storyService.getStoryDetails(this.storyId);

    this.story$.subscribe({
      next: (story: Story) => {
        this.timeAgo = story.time ? new Date(story.time * 1000).toLocaleString() : '';
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading story:', err);
        this.isLoading = false;
      },
    });
  }
}
