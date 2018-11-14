import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';

@Component( {
  selector: 'ng2-smart-table-cell',
  template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)"
                          (completed)="completed.emit($event)"
                          (changed)="changed.emit($event)">
    </table-cell-edit-mode>
  `,
} )
export class CellComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;
  @Input() createConfirm: EventEmitter<any>;
  @Input() cancelConfirm: EventEmitter<any>;
  @Input() isNew: boolean;
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() completed = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() changed = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();

  onEdited( event: any ) {
    if ( this.isNew ) {
      this.grid.create( this.grid.getNewRow(), this.createConfirm );
    } else {
      if ( event.key === 'Enter' && this.grid.getSetting( 'mode' ) === 'external' ) {
        this.save.emit( this.row );
      } else {
        this.grid.save( this.row, this.editConfirm );
      }
    }
  }
}
