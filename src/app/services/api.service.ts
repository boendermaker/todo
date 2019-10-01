import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
    _baseUrl = 'http://api.boendermaker.de/';

    constructor(private http: HttpClient) { }

    getAllTodos() {
        return this.http.get(`${this._baseUrl}?action=getall`);
    }

}