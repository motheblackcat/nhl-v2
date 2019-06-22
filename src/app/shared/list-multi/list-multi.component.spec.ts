import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultiComponent } from './list-multi.component';

describe('ListMultiComponent', () => {
  let component: ListMultiComponent;
  let fixture: ComponentFixture<ListMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
