import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tanstack } from './tanstack';

describe('Tanstack', () => {
  let component: Tanstack;
  let fixture: ComponentFixture<Tanstack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tanstack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tanstack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
