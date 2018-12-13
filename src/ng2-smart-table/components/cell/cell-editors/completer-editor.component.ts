import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompleterService } from 'ng2-completer';

import { DefaultEditor } from './default-editor';

@Component( {
  selector: 'completer-editor',
  template: `
    <ng2-completer *ngIf="cell.isEditable()" [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [overrideSuggested]="cell.getColumn().getConfig().completer.override || false"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || cell.getValue() || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    <!-- just use regular view logic when cell is not editable-->
    <div *ngIf="!cell.isEditable()" [ngSwitch]="cell.getColumn().type">
      <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
      <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
      <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
  `,
} )
export class CompleterEditorComponent extends DefaultEditor implements OnInit {

  completerStr: string = '';
  @Output() completed = new EventEmitter<any>();

  constructor( private completerService: CompleterService ) {
    super();
  }

  ngOnInit() {
    if ( this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer' ) {
      const config = this.cell.getColumn().getConfig().completer;
      config.dataService = this.completerService.local( config.data, config.searchFields, config.titleField );
      config.dataService.descriptionField( config.descriptionField );
    }
  }

  onEditedCompleter( data: { title: '' } ): boolean {
    this.cell.newValue = data.title;
    this.completed.emit( { data, row: this.cell } );
    return false;
  }
}
