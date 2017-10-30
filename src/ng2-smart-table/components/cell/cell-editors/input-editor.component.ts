import { AfterContentChecked, AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

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
           (keydown.esc)="onStopEditing.emit()"
           (change)="onChange.emit($event)"
           (keyup)="onKeyup($event)">
    <!-- just use regular view logic when cell is not editable-->
    <div *ngIf="!cell.isEditable()" [ngSwitch]="cell.getColumn().type">
      <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
      <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
      <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
  `,
} )
export class InputEditorComponent extends DefaultEditor implements AfterContentChecked {
  ngAfterContentChecked(): void {
    this.formatFunction = this.cell.getColumn().getInputFormatFunction();
    if ( this.formatFunction ) {
      this.cell.setValue(this.formatFunction(this.cell.getValue()));
    }
  }

  @Output() onChange = new EventEmitter<any>();

  formatFunction: Function;

  constructor() {
    super();

  }

  onKeyup( event: any ) {
    if ( this.formatFunction ) {
      this.cell.setValue(this.formatFunction(event.currentTarget.value));
    }
  }
}
