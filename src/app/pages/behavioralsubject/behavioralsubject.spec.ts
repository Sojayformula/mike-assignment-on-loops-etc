import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behavioralsubject } from './behavioralsubject';

describe('Behavioralsubject', () => {
  let component: Behavioralsubject;
  let fixture: ComponentFixture<Behavioralsubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behavioralsubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behavioralsubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
