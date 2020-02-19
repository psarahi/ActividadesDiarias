import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Actividades } from '../../Modelos/actividades';
import { Proyectos } from '../../Modelos/proyectos';
import { DatalocalService } from '../../services/datalocal.service';
import { Storage } from '@ionic/storage';
import { DrawerState } from 'ion-bottom-drawer';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

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
  proyectos: Proyectos[] = [];

  databaseObj: SQLiteObject;
  name_model: string = '';
  row_data: any = [];
  readonly database_name: string = 'freaky_datatable.db';
  readonly table_name: string = 'myfreakytable';

  constructor(
    private storage: Storage,
    private dataService: DatalocalService,
    private platform: Platform,
    private sqlite: SQLite
  ) {

    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    })

  }

  async ngOnInit() {

    // this.actividades = await this.storage.get('actividades');

    // console.log(this.actividades);

  }

  alert() {
    alert('Test');
  }

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      alert('freaky_datatable Database Created!');
    })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }


  createTable() {

    this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', []).then(() => {
      alert('Table Created!');
    })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }


  insertRow() {
    if (!this.name_model.length) {
      alert("Enter Name");
      return;
    }
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', []).then(() => {
      alert('Row Inserted!');
      this.getRows();
    })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  getRows() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then((res) => {
      this.row_data = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.row_data.push(res.rows.item(i));
        }
      }
    })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  deleteRow(item) {
    this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, []).then((res) => {
      alert("Row Deleted!");
      this.getRows();
    })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }













  async Cargar() {

    this.dataService.cargarLocalStorage().subscribe(
      (data) => {

        console.log(data);

      }
    )

    console.log(this.storage.get('actividades'));

    // debugger;
    this.actividades = await this.storage.get('actividades');

    this.proyectos = await this.storage.get('proyectos');

    // console.log(this.actividades);

  }



  Registrar() {

    this.storage.clear();
    this.actividades = [];

  }

}
