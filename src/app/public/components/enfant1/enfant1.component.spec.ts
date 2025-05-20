import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enfant1Component } from './enfant1.component';

describe('Enfant1Component', () => {
  let component: Enfant1Component;
  let fixture: ComponentFixture<Enfant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enfant1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
