import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async set(key: string, value: any) {
    try {
      await (Storage as any).set({ key, value });
      return true;
    } catch (error) {
      console.error('Error al establecer en el almacenamiento', error);
      return false;
    }
  }

  public async get(key: string) {
    try {
      const result = await (Storage as any).get({ key });
      return result ? JSON.parse(result.value) : null;
    } catch (error) {
      console.error('Error al obtener del almacenamiento', error);
      return null;
    }
  }

  public async remove(key: string) {
    try {
      await (Storage as any).remove({ key });
      return true;
    } catch (error) {
      console.error('Error al eliminar del almacenamiento', error);
      return false;
    }
  }
}
