import { TestBed } from '@angular/core/testing';

import { PlantGuideService } from './plant-guide.service';

describe('PlantGuideService', () => {
  let service: PlantGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
