import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentFirstComponent } from './app-component-first.component';

describe('AppComponentFirstComponent', () => {
  let component: AppComponentFirstComponent;
  let fixture: ComponentFixture<AppComponentFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
