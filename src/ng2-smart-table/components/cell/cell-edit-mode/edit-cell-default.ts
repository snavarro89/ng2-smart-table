import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

export class EditCellDefault {

  @Input() cell: Cell;
  @Input() inputClass: string = '';

  @Output() edited = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();
  @Output() changed = new EventEmitter<any>();

  onEdited( event: any ): boolean {
    this.edited.next( event );
    return false;
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick( event: any ) {
    event.stopPropagation();
  }

  onChange( event: any ) {
    event.stopPropagation();
    event.cell = this.cell;
    this.changed.emit( event );
  }
}
