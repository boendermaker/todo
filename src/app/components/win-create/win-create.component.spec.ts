import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinCreateComponent } from './win-create.component';

describe('WinCreateComponent', () => {
  let component: WinCreateComponent;
  let fixture: ComponentFixture<WinCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
