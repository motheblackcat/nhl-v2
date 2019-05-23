import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsComponent } from './bags.component';

describe('BagsComponent', () => {
  let component: BagsComponent;
  let fixture: ComponentFixture<BagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
