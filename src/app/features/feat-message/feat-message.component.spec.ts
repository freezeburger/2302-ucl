import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatMessageComponent } from './feat-message.component';

describe('FeatMessageComponent', () => {
  let component: FeatMessageComponent;
  let fixture: ComponentFixture<FeatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
