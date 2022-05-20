import {
    HttpEvent, HttpHandler,
    HttpHeaders, HttpInterceptor, HttpRequest,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfig } from '../configs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const unProtectedResources = [''];
        const isUnProtectedResource = unProtectedResources.filter((x: string) => req.url.includes(x)).length > 0;
        const modifiedReq = isUnProtectedResource === true ? req : this.setHeader(req);

        return next.handle(modifiedReq);
    }

    /* Private Methods */
    private setHeader(req: HttpRequest<any>): HttpRequest<any> {
        let modifiedReq: HttpRequest<any> = req;
        const token = localStorage.getItem(AppConfig.localStorage.authtokenKey);

        if (!token) {
            this.authService.logout();
        }

        switch (req.method) {
            case 'GET':
            case 'DELETE':
            case 'PUT':
            case 'POST':
            case 'PATCH':
                modifiedReq = req.clone({
                    headers: new HttpHeaders({
                        Authorization: `Bearer ${token}`,
                    })
                });
                break;
        }

        return modifiedReq;
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
