import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datananipulation } from './datananipulation';

describe('Datananipulation', () => {
  let component: Datananipulation;
  let fixture: ComponentFixture<Datananipulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datananipulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datananipulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
