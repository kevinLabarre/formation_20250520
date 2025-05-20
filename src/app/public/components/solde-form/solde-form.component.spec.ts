import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeFormComponent } from './solde-form.component';

describe('SoldeFormComponent', () => {
  let component: SoldeFormComponent;
  let fixture: ComponentFixture<SoldeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
