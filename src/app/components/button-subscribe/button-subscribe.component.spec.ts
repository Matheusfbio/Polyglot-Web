import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubscribeComponent } from './button-subscribe.component';

describe('ButtonSubscribeComponent', () => {
  let component: ButtonSubscribeComponent;
  let fixture: ComponentFixture<ButtonSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
