import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Capacitor } from '@capacitor/core';

if (Capacitor.isPluginAvailable('Storage')) {
  import('@capacitor/storage').then(() => {
    console.log('Capacitor storage plugin initialized');
  });
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
