import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HnNewsUtilComponent } from './hn-news-util.component';

describe('HnNewsUtilComponent', () => {
  let component: HnNewsUtilComponent;
  let fixture: ComponentFixture<HnNewsUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnNewsUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HnNewsUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
