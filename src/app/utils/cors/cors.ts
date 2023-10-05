import { HttpHeaders } from '@angular/common/http';

export const HttpHeader = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
  'Accept': 'application/json',
});
