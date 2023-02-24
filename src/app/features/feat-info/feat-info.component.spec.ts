import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatInfoComponent } from './feat-info.component';

describe('FeatInfoComponent', () => {
  let component: FeatInfoComponent;
  let fixture: ComponentFixture<FeatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
