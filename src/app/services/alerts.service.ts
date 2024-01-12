import { Injectable } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { StorageService } from './storage.service';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(
    private alertCtrl: AlertController,
    private storage: StorageService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private faio: FingerprintAIO
  ) {}

  public async setPass() {
    const alert = await this.alertCtrl.create({
      header: 'Guardar credenciales',
      subHeader: 'Por favor ingrese sus credenciales',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {}
        },
        {
          text: 'Confirmar',
          handler: async (pass) => {
            let { password } = pass;
            await this.storage.set('user_pass', password);
            this.toastInfo("Ahora puede loguarte con tu huella.");
          }
        }
      ]
    });
    await alert.present().then(() => {
      const password: any = document.querySelector('ion-alert input');
      password.focus();
      return;
    });
  }

  public async checkPass() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Credenciales',
      subHeader: 'Por favor ingrese sus credenciales',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {}
        },
        {
          text: 'Confirmar',
          handler: async (pass) => {
            let { password } = pass;
            let res = await this.storage.get('user_pass');
            if (res == password) {
              try {
                const device = await Device['getInfo']();
                if (device.platform != "web") {
                  this.faio.isAvailable().then((result: any) => {
                    this.ConfirmAIO(); // Test if this phone has Biometric Hardware
                  });
                } else {
                  this.toastInfo("Biometric isn't activated, please use emulator to use this login feature");
                }
              } catch (error) {}
              this.navCtrl.navigateForward('/home', { animated: true });
            } else {
              this.toastError("Error en contraseña");
            }
          }
        }
      ]
    });
    await alert.present().then(() => {
      const password: any = document.querySelector('ion-alert input');
      password.focus();
      return;
    });
  }

  private async toastError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: 'danger',
      animated: true,
      position: 'bottom'
    });
    toast.present();
  }

  public async toastInfo(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'primary',
      animated: true,
      position: 'bottom'
    });
    toast.present();
  }

  private async ConfirmAIO() {
    const alert = await this.alertCtrl.create({
      header: 'Use ID',
      message: 'Do you want to use Biometric Authentication?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'primary',
          handler: async (c) => {}
        },
        {
          text: 'Yes',
          handler: async (o) => {
            await this.storage.set('biometric', "true");
            this.toastInfo("Now you can use Biometric");
          }
        }
      ]
    });

    await alert.present();
  }

  public async fingerPrintAIO() {
    this.faio.isAvailable().then((result: any) => {
      this.faio.show({
        title: 'Biometric Authentication',
        subtitle: 'Please log',
        disableBackup: true,
      }).then((res: any) => {
        this.navCtrl.navigateForward('/home', { animated: true });
        return true;
      }).catch((error: any) => {
        this.toastError(error.message);
        return false;
      });
    }).catch((error: any) => {
      this.toastError("This phone don't have biometric hardware or it is deactivated, please check it");
    });
  }

  public async questionFingerPrint() {
    const alert = await this.alertCtrl.create({
      header: 'Iniciar con huella digital',
      subHeader: '¿Quieres ingresar la próxima vez con tu huella digital?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'primary',
          handler: async () => {}
        },
        {
          text: 'Confirmar',
          cssClass: 'primary',
          handler: async (pass) => {
            let { password } = pass;
            let res = await this.storage.get('user_pass');
            if (res == password) {
              try {
                const device = await Device['getInfo']();
                if (device.platform != "web") {
                  this.faio.isAvailable().then((result: any) => {
                    this.ConfirmAIO(); // Test if this phone has Biometric Hardware
                  });
                } else {
                  this.toastInfo("Biometric isn't activated, please use emulator to use this login feature");
                }
              } catch (error) {}
              this.navCtrl.navigateForward('/home', { animated: true });
            } else {
              this.toastError("Error en contraseña");
            }
          }
        }
      ]
    });
    await alert.present().then(() => {
      const password: any = document.querySelector('ion-alert input');
      password.focus();
      return;
    });
  }



    async mostrarDialogoHuellaDigital(username: any,password: any) {
    try {

      let resUsername = await this.storage.get('username');
      let resPassword = await this.storage.get('password');

      if((resUsername == username)&&(resPassword == password)){
        this.toastInfo("Bienvenido");
      }

      const result = await this.faio.show({
        title: 'Huella Digital', // Utiliza title en lugar de clientId
        disableBackup: true, // Deshabilita la opción de copia de seguridad
      });
      await this.storage.set('username', username);
      await this.storage.set('password', password);
            this.toastInfo("Ahora puede loguarte con tu huella.");
  
      console.log('Huella digital autenticada con éxito', result);
    } catch (error) {
      console.error('Error al autenticar mediante huella digital', error);
    }
  }

}
