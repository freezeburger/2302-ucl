import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatAuthLoginComponent } from './feat-auth-login.component';

describe('FeatAuthLoginComponent', () => {
  let component: FeatAuthLoginComponent;
  let fixture: ComponentFixture<FeatAuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatAuthLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
