import { Component, Input, Output, EventEmitter, OnChanges, AfterContentInit } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: '[ng2-st-thead-form-row]',
  template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid"  [row]="row" [cancelConfirm]="cancelConfirm" (create)="onCreate($event)" (custom)="custom.emit($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of row.getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="row.isInEditing"
                              (edited)="onCreate($event)"
                              (completed)="completed.emit($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" [row]="row" [cancelConfirm]="cancelConfirm" (create)="onCreate($event)" (custom)="custom.emit($event)"></ng2-st-actions>
      </td>
  `,
})
export class TheadFormRowComponent implements OnChanges, AfterContentInit {
  ngAfterContentInit(): void {
    this.row = this.grid.getNewRow();
  }

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() createConfirm: EventEmitter<any>;
  @Input() cancelConfirm: EventEmitter<any>;

  @Output() create = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  addInputClass: string;

  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  ngOnChanges(){
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.addInputClass = this.grid.getSetting('add.inputClass');
  }
}
