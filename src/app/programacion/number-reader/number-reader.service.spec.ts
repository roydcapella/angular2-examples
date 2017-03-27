/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumberReaderService } from './number-reader.service';

describe('NumberReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberReaderService]
    });
  });

  it('should ...', inject([NumberReaderService], (service: NumberReaderService) => {
    expect(service).toBeTruthy();
  }));
});
