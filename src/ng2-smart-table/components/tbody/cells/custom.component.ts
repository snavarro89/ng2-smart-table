import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';

import { Grid } from '../../../lib/grid';

@Component( {
  selector: 'ng2-st-tbody-custom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let action of grid.getSetting('actions.custom')" [ngSwitch]="action.type">
      <div *ngSwitchCase="'select'"
           class="ng2-smart-action ng2-smart-action-custom-custom">
        <select [(ngModel)]="selectedItem" (change)="onSelect(action)">
          <option *ngFor="let item of action.optionItems" [ngValue]="item.value">{{item.description}}</option>
        </select>
      </div>
      <a *ngSwitchDefault
         [innerHTML]="action.title"
         class="ng2-smart-action ng2-smart-action-custom-custom"
         href="#"
         (click)="onCustom(action, $event)"></a>
    </div>
  `,
} )
export class TbodyCustomComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: any;
  @Output() custom = new EventEmitter<any>();

  selectedItem: any;

  onSelect( action: any ) {
    event.preventDefault();
    event.stopPropagation();

    this.custom.emit( {
      action: action,
      data: this.row.getData(),
      source: this.source,
      selectedItem: this.selectedItem,
    } );
  }

  onCustom( action: any, event: any ) {
    event.preventDefault();
    event.stopPropagation();

    this.custom.emit( {
      action: action,
      data: this.row.getData(),
      source: this.source,
    } );
  }

}
