import { TranslocoTestingModule, TranslocoTestingOptions } from '@ngneat/transloco';
import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { de, en },
    translocoConfig: {
      availableLangs: ['de', 'en'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options
  });
}
