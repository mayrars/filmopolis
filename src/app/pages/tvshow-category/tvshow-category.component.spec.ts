import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowCategoryComponent } from './tvshow-category.component';

describe('TvshowCategoryComponent', () => {
  let component: TvshowCategoryComponent;
  let fixture: ComponentFixture<TvshowCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvshowCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
