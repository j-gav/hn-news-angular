import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '@hn-news/hn-news-data-access';
import { HN_NEWS_API_TOP_STORIES_URL, HN_NEWS_API_NEW_STORIES_URL, HN_NEWS_API_BEST_STORIES_URL } from '@hn-news/hn-news-model';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@Component({
  selector: 'hn-filter-pane',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule],
  template: `
    <form [formGroup]="form">
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
    </form>
  `,
})
export class FilterPaneComponent {
  private StoriesService = inject(StoriesService);

  form = new FormGroup({});
  model = { type: HN_NEWS_API_TOP_STORIES_URL };
  fields: FormlyFieldConfig[] = [
    {
      key: 'type',
      type: 'select',
      props: {
        required: true,
        options: [
          { value: HN_NEWS_API_TOP_STORIES_URL, label: 'Top Stories' },
          { value: HN_NEWS_API_NEW_STORIES_URL, label: 'New Stories' },
          { value: HN_NEWS_API_BEST_STORIES_URL, label: 'Best Stories' },
        ],
      },
      hooks: {
        onInit: (field) => {
          field?.formControl?.valueChanges.subscribe((value) => {
            this.StoriesService.setApiUrl(value);
          });
        },
      },
    },
  ];
}
