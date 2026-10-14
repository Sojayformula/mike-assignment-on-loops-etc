import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interceptorpage } from './interceptorpage';

describe('Interceptorpage', () => {
  let component: Interceptorpage;
  let fixture: ComponentFixture<Interceptorpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interceptorpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interceptorpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
