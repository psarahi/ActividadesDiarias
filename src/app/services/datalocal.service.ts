import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataService } from './data.service';
import { Actividades } from '../Modelos/actividades';
import { Proyectos } from '../Modelos/proyectos';
//import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  actividades: Actividades[] = [];
  // proyectos: Proyectos[] = [];
  constructor(
    private dataService: DataService,
    private storage: Storage,
    private toastCtrl: ToastController
  ) { }

  cargarLocalStorage() {
    //this.storage.remove('actividades');
    //this.storage.remove('proyectos');

    this.dataService.getAll()
      .subscribe(
        async data => {
          // debugger;
          this.storage.set('actividades', data[0]);
          this.storage.set('proyectos', data[1]);


          
          this.presentToast('Datos Cargados');

        }
      );


  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      color: 'dark',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }


}


