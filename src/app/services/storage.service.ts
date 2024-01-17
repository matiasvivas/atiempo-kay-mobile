// storage.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;

  constructor(private storageService: Storage) {
    this.init();
  }

  public async init() {
    this.storage = await this.storageService.create();
  }

  public async set(key: string, value: any) {
    if (this.storage) {
      await this.storage.set(key, value);
    } else {
      console.error('Error: Database not created. Must call create() first');
    }
  }

  public async get(key: string) {
    if (this.storage) {
      return await this.storage.get(key);
    } else {
      console.error('Error: Database not created. Must call create() first');
      return null;
    }
  }

  public async remove(key: string) {
    if (this.storage) {
      await this.storage.remove(key);
    } else {
      console.error('Error: Database not created. Must call create() first');
    }
  }
}
