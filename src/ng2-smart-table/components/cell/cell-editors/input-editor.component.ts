import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component( {
  selector: 'input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input *ngIf="cell.isEditable()" [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    <!-- just use regular view logic when cell is not editable-->
    <div *ngIf="!cell.isEditable()" [ngSwitch]="cell.getColumn().type">
      <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
      <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
      <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
  `,
} )
export class InputEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
