import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Actividades } from '../../Modelos/actividades';
import { Proyectos } from '../../Modelos/proyectos';
import { DatalocalService } from '../../services/datalocal.service';
import { Storage } from '@ionic/storage';
import { DrawerState } from 'ion-bottom-drawer';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // drawerState = DrawerState.Bottom;
  // minimumHeight = 0;
  // dockedHeight = 300;
  // shouldBounce = true;
  // distanceTop = 56;

  shouldBounce = true;
  dockedHeight = 300;
  distanceTop = 56;
  drawerState = DrawerState.Bottom;
  states = DrawerState;
  minimumHeight = 50;

  actividades: Actividades[] = [];
  // proyectos: Proyectos[] = [];

  constructor(
    private storage: Storage,
    private dataService: DatalocalService
  ) { }

  async ngOnInit() {

    //this.actividades = await this.storage.get('actividades');

    // console.log(this.actividades);

  }

  async Cargar() {

    this.dataService.cargarLocalStorage().subscribe(
      (data) => {

        console.log(data);

      }
    )

    console.log(this.storage.get('actividades'));

    // debugger;
    // this.actividades = await this.storage.get('actividades');

    // console.log(this.actividades);

  }



  Registrar() {

    this.storage.clear();
    this.actividades = [];

  }

}
