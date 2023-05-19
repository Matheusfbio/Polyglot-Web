import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParceirosComponent } from './button-parceiros.component';

describe('ButtonParceirosComponent', () => {
  let component: ButtonParceirosComponent;
  let fixture: ComponentFixture<ButtonParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonParceirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
