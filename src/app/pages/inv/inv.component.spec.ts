import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvComponent } from './inv.component';

describe('InvComponent', () => {
  let component: InvComponent;
  let fixture: ComponentFixture<InvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
