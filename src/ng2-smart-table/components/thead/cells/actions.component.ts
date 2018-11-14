import {Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-actions',
  template: `
    <ng2-st-thead-custom *ngIf="showCustomInForm" [grid]="grid" (custom)="custom.emit($event)" [row]="row" [source]="source"></ng2-st-thead-custom>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="onCancel($event)"></a>
  `,
})
export class ActionsComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() cancelConfirm: EventEmitter<any>;
  @Output() create = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();


  createButtonContent: string;
  cancelButtonContent: string;
  showCustomInForm: string;

  onCancel(event: any){
    event.preventDefault();
    this.grid.cancelAddRow(this.cancelConfirm);
  }

  ngOnChanges() {
    this.createButtonContent = this.grid.getSetting('add.createButtonContent');
    this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    this.showCustomInForm = this.grid.getSetting( 'actions.showCustomInForm' );
  }
}
