import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export class Cell {

  newValue: any = '';
  protected static PREPARE = (value: any) => value;
  protected static EDITABLE = ( cell: Cell ) => cell.getColumn().isEditable;

  constructor(protected value: any, protected row: Row, protected column: any, protected dataSet: DataSet, protected isNew: boolean) {
    this.newValue = value;
  }

  getColumn(): Column {
    return this.column;
  }

  getRow(): Row {
    return this.row;
  }

  getValue(): any {
    const valid = this.column.getValuePrepareFunction() instanceof Function;
    const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
    return prepare.call(null, this.value, this.row.getData());
  }

  setValue(value: any): any {
    this.newValue = value;
  }

  getId(): string {
    return this.getColumn().id;
  }

  getTitle(): string {
    return this.getColumn().title;
  }

  isEditable(): boolean {
    if (this.getRow().index === -1) {
      return this.getColumn().isAddable;
    }
    else {
      const valid = this.column.getIsEditableFunction() instanceof Function;
      const isEditableFunc = valid ? this.column.getIsEditableFunction() : Cell.EDITABLE;
      return isEditableFunc( this );
    }
  }
}
