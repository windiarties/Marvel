import { TestBed, inject } from '@angular/core/testing';

import { charactersService } from './characters.service';

describe('charactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [charactersService]
    });
  });

  it('should be created', inject([charactersService], (service: charactersService) => {
    expect(service).toBeTruthy();
  }));
});
