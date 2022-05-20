/**
 * This is a wrapper for the HttpClient with caching and loading functionalitities
 * @author VishnuSomanath
 * @version 1.0.0
 */
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UiLoaderService } from '../components/ui-loader/ui-loader.service';
import { RequestCacheService } from './request-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  /* Public Properties */
  callStackCount = 0;

  private httpBackendClient: HttpClient;

  constructor(
    private httpClient: HttpClient,
    httpBackend: HttpBackend,
    private uiLoaderService: UiLoaderService,
    private cacheService: RequestCacheService
  ) {
    this.httpBackendClient = new HttpClient(httpBackend);
  }

  private getClient(needAuth: boolean): HttpClient {
    return needAuth ? this.httpClient : this.httpBackendClient;
  }

  /* Public Methods */
  /**
   * To call the API endpoints
   * @param apiPath 
   * @param options 
   * @param loaderText 
   * @param hasAuth
   * @param doCache  
   * @returns 
   */
  get<T>(apiPath: string, options: any = null, loaderText: string | any = null, hasAuth: boolean = true, doCache: boolean = false): Observable<T> {
    const showLoader = loaderText ? true : false;
    const cachedResponse = this.cacheService.get(apiPath);

    if (doCache && cachedResponse) {
      return of(cachedResponse) as unknown as Observable<T>;
    } else {
      if (showLoader) { this.showLoader(loaderText); }
      return this.getClient(hasAuth).get<T>(apiPath, options ?? new HttpHeaders())
        .pipe(
          tap((response: any) => {
            if (doCache) {
              this.cacheService.put(apiPath, response as any);
            }
            if (showLoader) { this.hideLoader(); }
          }),
          catchError(error => {
            if (showLoader) { this.hideLoader(); }
            return throwError(error);
          })
        );
    }
  }

  post<T>(apiPath: string, data: any, options: any = null, loaderText: string | any = null, hasAuth: boolean = true): Observable<T> {
    const showLoader = loaderText ? true : false;

    if (showLoader) { this.showLoader(loaderText); }
    return this.getClient(hasAuth).post<any>(apiPath, data, options ?? new HttpHeaders())
      .pipe(
        tap((response: any) => {
          if (showLoader) { this.hideLoader(); }
        }),
        catchError(error => {
          if (showLoader) { this.hideLoader(); }
          return throwError(error);
        })
      );
  }

  put<T>(apiPath: string, data: any, options: any = null, loaderText: string | any = null, hasAuth: boolean = true): Observable<T> {
    const showLoader = loaderText ? true : false;
    if (showLoader) { this.showLoader(loaderText); }
    return this.getClient(hasAuth).put<any>(apiPath, data, options ?? new HttpHeaders())
      .pipe(
        tap((response: any) => {
          if (showLoader) { this.hideLoader(); }
        }),
        catchError(error => {
          if (showLoader) { this.hideLoader(); }
          return throwError(error);
        })
      );
  }

  patch<T>(apiPath: string, data: any, options: any = null, loaderText: string | any = null, hasAuth: boolean = true): Observable<T> {
    const showLoader = loaderText ? true : false;
    if (showLoader) { this.showLoader(loaderText); }
    return this.getClient(hasAuth).patch<any>(apiPath, data, options ?? new HttpHeaders())
      .pipe(
        tap((response: any) => {
          if (showLoader) { this.hideLoader(); }
        }),
        catchError(error => {
          if (showLoader) { this.hideLoader(); }
          return throwError(error);
        })
      );
  }

  delete<T>(apiPath: string, options: any = null, loaderText: string | any = null, hasAuth: boolean = true): Observable<T> {
    const showLoader = loaderText ? true : false;
    if (showLoader) { this.showLoader(loaderText); }
    return this.getClient(hasAuth).delete<T>(apiPath)
      .pipe(
        tap((data: T) => {
          if (showLoader) { this.hideLoader(); }
        }),
        catchError(error => {
          if (showLoader) { this.hideLoader(); }
          return throwError(error);
        })
      );
  }

  /* Private Methods */
  private showLoader(loaderText: string): void {
    if (this.callStackCount === 0) {
      this.uiLoaderService.start(loaderText);
    }
    this.callStackCount++;
  }

  private hideLoader(): void {
    if (this.callStackCount === 1) {
      this.uiLoaderService.stop();
    }
    if (this.callStackCount > 0) {
      this.callStackCount--;
    }
  }
}
