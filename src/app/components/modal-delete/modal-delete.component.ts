import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.less']
})
export class ModalDeleteComponent implements OnInit {

    @Input() payload_delete;
    @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitOnDelete() {
        this.ondelete.emit(this.payload_delete);
    }

    emitOnClose() {
        this.onclose.emit();
    }

}
