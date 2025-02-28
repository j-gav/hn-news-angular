import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HnNewsDataAccessComponent } from './hn-news-data-access.component';

describe('HnNewsDataAccessComponent', () => {
  let component: HnNewsDataAccessComponent;
  let fixture: ComponentFixture<HnNewsDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnNewsDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HnNewsDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
