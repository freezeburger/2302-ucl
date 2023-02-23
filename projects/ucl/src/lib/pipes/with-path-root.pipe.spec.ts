import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WithPathRootPipe } from './with-path-root.pipe';

describe('WithPathRootPipe', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WithPathRootPipe
      ],
    }).compileComponents();
  });

  it('create an instance', () => {
    const router = inject(Router); 
    const pipe = new WithPathRootPipe(router);
    expect(pipe).toBeTruthy();
  });
});
