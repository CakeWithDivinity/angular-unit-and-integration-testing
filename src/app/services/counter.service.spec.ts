import { CounterService } from "./counter.service"
import { TestBed } from '@angular/core/testing';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });

    service = TestBed.inject(CounterService);
  });

  it('starts counter with 0', () => {
    expect(service.getCurrentCount()).toBe(0);
  });

  it('increases counter', () => {
    service.increment();
    expect(service.getCurrentCount()).toBe(1);
  });

  it('decreases counter', () => {
    service.decrement();
    expect(service.getCurrentCount()).toBe(-1);
  })
})
