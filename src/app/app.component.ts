import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  count$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.count$ = counterService.getCounterStream();
  }

  incrementCounter(): void {
    this.counterService.increment();
  }

  decrementCounter(): void {
    this.counterService.decrement();
  }
}
