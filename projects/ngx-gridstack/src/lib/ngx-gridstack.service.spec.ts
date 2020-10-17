import { TestBed } from '@angular/core/testing';

import { NgxGridstackService } from './ngx-gridstack.service';

describe('NgxGridstackService', () => {
  let service: NgxGridstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGridstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
