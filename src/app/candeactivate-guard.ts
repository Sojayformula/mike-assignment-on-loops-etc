
import { CanDeactivateFn } from '@angular/router';

export const candeactivateGuard: CanDeactivateFn<unknown> =
  () => {
    
    console.log('CanDeactivate guard is running');

    return confirm(
      'Are you sure you want to leave this page?'
    );



  }

