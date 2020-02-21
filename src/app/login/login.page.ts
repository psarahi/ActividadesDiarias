import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActividadesDiarias } from '../Modelos/actividadesDiarias';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: any;
  existe: ActividadesDiarias[] = [];

  constructor(
    private route: Router,
    private dataService: DataService,
    private alertCtrl: AlertController,
    private storage: Storage,

    private toastCtrl: ToastController) { }

  ngOnInit() {
    // console.log(btoa('control1*'));
    // console.log(atob('bWF5YTAwMjIwKg=='));
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario Invalido',
      // subHeader: '',
      message: 'Verifique su usuario y contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Bienvenido!!!!',
      duration: 3000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  login() {

    this.dataService.verificar(this.usuario, btoa(this.password)).subscribe(
      (res: []) => {

        this.existe = res;

        if (this.existe.length > 0) {
          this.storage.set('isLoggedIn', 'true');
          this.storage.set('userLogin', this.existe);
          this.presentToast();
          this.route.navigate(['tabsGroup/tabs/tab1']);

        } else {
          this.presentAlert();
        }

        this.usuario = '';
        this.password = '';

      },
      error => {
        console.log(error);
        console.log('Invalido');


      });


  }

}
