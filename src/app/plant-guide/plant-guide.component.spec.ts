import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGuideComponent } from './plant-guide.component';

describe('PlantGuideComponent', () => {
  let component: PlantGuideComponent;
  let fixture: ComponentFixture<PlantGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantGuideComponent]
    });
    fixture = TestBed.createComponent(PlantGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
