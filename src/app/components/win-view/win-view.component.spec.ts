import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinViewComponent } from './win-view.component';

describe('WinViewComponent', () => {
  let component: WinViewComponent;
  let fixture: ComponentFixture<WinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
