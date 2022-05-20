import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { AppConfig } from 'src/app/core/configs';
import { AppInjector } from 'src/app/core/services/app-injector.service';

export abstract class BaseComponentComponent {

  /* Public Properties */
  destroy$: Subject<boolean> = new Subject<boolean>();

  /* Private Properties */
  private datePipe: DatePipe;

  /* Constructor */
  constructor() {
    this.datePipe = AppInjector.get(DatePipe);
  }

  protected abstract initVariable(): void;

  protected abstract subscribeEvents(): void;

  protected destroyBase(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  /* Public Methods */
  formatDate(date: Date | string | null): any {
    return this.datePipe.transform(date, AppConfig.dateFormat)
  }
}
