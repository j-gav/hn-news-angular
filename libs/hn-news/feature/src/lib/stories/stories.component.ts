import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesInjectable } from '@hn-news/hn-news-data-access';
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

  ngOnInit() {
    console.log(
      'StoriesComponent init complete, here we should fetch the stories data from the data-access lib'
    );

    StoriesInjectable.subscribe((stories: Story[]) => {
      console.log('stories', stories);
    });

    //this.storyIds = [{ id: 1 }, { id: 2 }];
  }
}
