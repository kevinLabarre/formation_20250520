import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCHangesDemoChildrenComponent } from './on-changes-demo-children.component';

describe('OnCHangesDemoChildrenComponent', () => {
  let component: OnCHangesDemoChildrenComponent;
  let fixture: ComponentFixture<OnCHangesDemoChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnCHangesDemoChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnCHangesDemoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
