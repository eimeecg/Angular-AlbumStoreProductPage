import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Map } from 'rxjs/operator';

@Injectable()
export class ProductService {

  private _albumUrl: string;


  getAlbum(id: number) {
    this._http.get(_albumUrl).response.json()
  }

  constructor(private _http: Http) { }

}


