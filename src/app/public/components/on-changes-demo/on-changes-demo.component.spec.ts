import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCHangesDemoComponent } from './on-changes-demo.component';

describe('OnCHangesDemoComponent', () => {
  let component: OnCHangesDemoComponent;
  let fixture: ComponentFixture<OnCHangesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnCHangesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnCHangesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
