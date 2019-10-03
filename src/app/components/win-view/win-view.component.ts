import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-win-view',
    templateUrl: './win-view.component.html',
    styleUrls: ['./win-view.component.less']
})
export class WinViewComponent implements OnInit {

    @Input() payload_view;

    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    innerHeight$ = null;
    innerHeight: Number;

    constructor(private store: StoreService) { }

    ngOnInit() {
        this.innerHeight$ = this.store.stream('innerheight').subscribe(res => this.innerHeight = res);
        this.innerHeight = window.innerHeight;
    }

    emitCloseViewWindow() {
        this.onclose.emit();
    }

}
