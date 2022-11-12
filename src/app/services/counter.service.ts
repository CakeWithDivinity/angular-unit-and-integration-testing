import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count = new BehaviorSubject(0);

  increment(): void {
    this.count.next(this.count.value + 1);
  }

  decrement(): void {
    this.count.next(this.count.value - 1);
  }

  getCurrentCount(): number {
    return this.count.value;
  }

  getCounterStream(): Observable<number>{
    return this.count.asObservable();
  }
}
