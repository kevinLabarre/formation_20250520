import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOngletComponent } from './demo-onglet.component';

describe('DemoOngletComponent', () => {
  let component: DemoOngletComponent;
  let fixture: ComponentFixture<DemoOngletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoOngletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoOngletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
