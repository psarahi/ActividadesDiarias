import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';

@Injectable()
export class AuthGuard implements CanActivate {
    status: boolean;
    constructor(
        private router: Router,
        private storage: Storage
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.verifyLogin(url);
    }

    verifyLogin(url): boolean {

        console.log(this.isLoggedIn(), 'islogin');

        if (!this.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        } else if (this.isLoggedIn()) {
            return true;
        }
    }
    public isLoggedIn(): boolean {
        this.status = true;

        // debugger;
        let login: any = 'false';
        this.storage.get('isLoggedIn').then(
            async (res: boolean) => {
                console.log(res, 'res');

                login = await res;

                console.log(login, 'login');

                if (login === 'true') {
                    this.status = true;
                    console.log(' TTTTT');
                    
                } else {
                    this.status = false;
                }
            });

        console.log(this.status, 'Status');

        return this.status;
    }

}
