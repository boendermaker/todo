import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-win-create',
    templateUrl: './win-create.component.html',
    styleUrls: ['./win-create.component.less']
})
export class WinCreateComponent implements OnInit {

    @Output() onsave: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitCloseCreateWindow() {
        this.onclose.emit();
    }

    emitSaveItem(payload) {
        payload.datum = new Date().toISOString().slice(0, 10);
        payload.done = 0;
        this.onsave.emit(payload);
    }

    validate(field) {
        console.log(field.errors);
    }

}
