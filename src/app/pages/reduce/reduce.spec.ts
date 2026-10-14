import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reduce } from './reduce';

describe('Reduce', () => {
  let component: Reduce;
  let fixture: ComponentFixture<Reduce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reduce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reduce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
