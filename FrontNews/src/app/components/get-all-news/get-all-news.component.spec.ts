import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNewsComponent } from './get-all-news.component';

describe('GetAllNewsComponent', () => {
  let component: GetAllNewsComponent;
  let fixture: ComponentFixture<GetAllNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllNewsComponent]
    });
    fixture = TestBed.createComponent(GetAllNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
