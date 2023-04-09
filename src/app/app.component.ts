import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  selectedLanguage$ = this.translocoService.langChanges$;

  count$: Observable<number>;

  constructor(
    private counterService: CounterService,
    private translocoService: TranslocoService
  ) {
    this.count$ = counterService.getCounterStream();
  }

  incrementCounter(): void {
    this.counterService.increment();
  }

  decrementCounter(): void {
    this.counterService.decrement();
  }

  changeLanguage(event: Event): void {
    const lang = (event.target as HTMLSelectElement).value;
    this.translocoService.setActiveLang(lang);
  }
}
