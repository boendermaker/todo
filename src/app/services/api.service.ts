import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
    _baseUrl = 'http://api.boendermaker.de/';

    constructor(private http: HttpClient) { }

    _getHeaders() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin': '*',
            })
        };
        return httpOptions;
    }

    getAllTodos() {
        return this.http.get(`${this._baseUrl}?action=getall`);
    }

    getAllTodosOpen() {
        return this.http.get(`${this._baseUrl}?action=getallopen`);
    }

    getAllTodosDone() {
        return this.http.get(`${this._baseUrl}?action=getalldone`);
    }

    toggleDone(payload) {
        return this.http.post(`${this._baseUrl}?action=toggledone`, JSON.stringify(payload), this._getHeaders());
    }

}