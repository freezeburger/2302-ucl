import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageTitleDirective } from './page-title.directive';

describe('PageTitleDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PageTitleDirective
      ],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = new PageTitleDirective();
    expect(directive).toBeTruthy();
  });
});
