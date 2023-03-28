import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';


  getAlbum(id: number);Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>
    response.json(<Album>);
  }


  constructor(private _http: Http) { }

}


