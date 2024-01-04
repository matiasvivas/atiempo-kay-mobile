import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.kioscoatiempo',
  appName: 'deleteapp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: ['*'],
  },
  cordova: {
    // Configuración específica de Android
    preferences: {
      'android-minSdkVersion': '19',
      'android-targetSdkVersion': '30',
      'AndroidPersistentFileLocation': 'Compatibility',
      'KeyboardDisplayRequiresUserAction': 'false',
      'android-permission': 'INTERNET',  // Agrega el permiso de Internet
      // Agrega otros permisos aquí si es necesario
    }
  }
};

export default config;
