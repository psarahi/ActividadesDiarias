import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Actividades } from '../../Modelos/actividades';
import { Proyectos } from '../../Modelos/proyectos';
import { DatalocalService } from '../../services/datalocal.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  actividades: Actividades[] = [];
  // proyectos: Proyectos[] = [];

  constructor(
    private storage: Storage,
    private dataService: DatalocalService
  ) { }

  async ngOnInit() {

    this.actividades = await this.storage.get('actividades');

    console.log(this.actividades);

  }

  async Cargar() {

    this.dataService.cargarLocalStorage();
     // debugger;
    this.actividades = await this.storage.get('actividades');

    console.log(this.actividades);

  }



  Registrar() {

    this.storage.clear();
    this.actividades = [];

  }

}
