import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpRequestParams } from 'src/app/core/interface';
import { HttpRequestType } from 'src/app/core/enum';
import { HttpHeader } from 'src/app/utils/cors/cors';


@Injectable({ providedIn: 'root' })
export class Http {
  private server: string = environment.HttpServers.BASE_API_DEV;

  constructor(private http: HttpClient) {}

  request(httpParams: HttpRequestParams) {
    if (httpParams.method == HttpRequestType.GET) {
      return this.http.get(`${this.server}${httpParams.url}`, {
        headers: HttpHeader,
      });
    } else if (httpParams.method == HttpRequestType.POST) {
      return this.http.post(
        `${this.server}${httpParams.url}`,
        httpParams.body,
        { headers: HttpHeader }
      );
    } else if (httpParams.method == HttpRequestType.DELETE) {
      return this.http.delete(`${this.server}${httpParams.url}`, {
        headers: HttpHeader,
      });
    } else {
      return this.http.get(`${this.server}${httpParams.url}`, {
        headers: HttpHeader,
      });
    }
  }
}
