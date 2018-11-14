import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component( {
  selector: 'table-cell-edit-mode',
  template: `
    <div [ngSwitch]="getEditorType()">
      <table-cell-custom-editor *ngSwitchCase="'custom'"
                                [cell]="cell"
                                [inputClass]="inputClass"
                                (edited)="onEdited($event)">
      </table-cell-custom-editor>
      <table-cell-default-editor *ngSwitchDefault
                                 [cell]="cell"
                                 [inputClass]="inputClass"
                                 (edited)="onEdited($event)"
                                 (completed)="completed.emit($event)"
                                 (changed)="changed.emit($event)">
      </table-cell-default-editor>
    </div>
  `,
} )
export class EditCellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';

  @Output() completed = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() changed = new EventEmitter<any>();
  onEdited( event: any ): boolean {
    this.edited.next( event );
    return false;
  }

  getEditorType(): string {
    return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
  }
}
