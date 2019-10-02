import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinEditComponent } from './win-edit.component';

describe('WinEditComponent', () => {
  let component: WinEditComponent;
  let fixture: ComponentFixture<WinEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
