import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StoreService {

    subject$ = {};

    createSubject(namespace) {
        if(!this.subject$.hasOwnProperty(namespace)) {
            this.subject$[namespace] = new BehaviorSubject(null);
        }else{
            console.log('Store: Namespace already exists');
        }
    }

    destroy(namespace) {
        delete this.subject$[namespace];
    }

    getCurrentValue(namespace) {
        return this.subject$[namespace].getValue();
    }

    stream(namespace): Observable<any> {
        return this.subject$[namespace].asObservable();
    }

    add(namespace, payload) {
        this.subject$[namespace].next(payload);
    }

}