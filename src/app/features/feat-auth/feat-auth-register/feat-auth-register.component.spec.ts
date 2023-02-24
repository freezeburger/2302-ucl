import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAuthRegisterComponent } from './feat-auth-register.component';

describe('FeatAuthRegisterComponent', () => {
  let component: FeatAuthRegisterComponent;
  let fixture: ComponentFixture<FeatAuthRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAuthRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAuthRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
