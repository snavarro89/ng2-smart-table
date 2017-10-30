import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent } from '../../../../ng2-smart-table/ng2-smart-table.component';

@Component( {
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table #basicTable
                     [settings]="settings"
                     [source]="data"
                     (completed)="onCompleted($event)"
                     (changed)="onChange($event)"
                     (save)="onSave($event)">
      <!--(edit)="onEdit($event)">-->
      <!--(custom)="onCustom($event)">-->

    </ng2-smart-table>
  `,
} )
export class BasicExampleDataComponent {

  @ViewChild( Ng2SmartTableComponent ) basicTable: Ng2SmartTableComponent;

  onCompleted( event: any ) {
    event.row.setData( {
      id: 'hello',
      name: event.data.originalObject.name,
      username: event.data.originalObject.username,
      email: event.data.originalObject.email,
    } );
  }

  onChange( event: any ) {
    console.log( event );
  }

  onSave( event: any ) {
    console.log( event );
  }

  /*onEdit( row: any ) {
    console.log( row );
    this.basicTable.grid.edit( row );

  }*/

  /*  onCustom( event: any ) {
      console.log( event );
      event.data[event.action.name] = event.selectedItem;
    }*/

  completerSet = [
    { name: 'John', username: 'john', email: 'josh@example.com', test: 'test' },
    { name: 'Josh', username: 'josh', email: 'john@example.com', test: 'test' },
    { name: 'Rachel', username: 'Rachel', email: 'rachel@example.com', test: 'test' },
    { name: 'David', username: 'David', email: 'david@example.com', test: 'test' },
    { name: 'Joanna', username: 'Joanna', email: 'joanna@example.com', test: 'test' },
    { name: 'Michael', username: 'Michael', email: 'michael@example.com', test: 'test' },
  ];

  settings = {
    cellClassFunction: ( cell ) => {
      if ( cell.getColumn().id === 'name' ) {
        return 'name-column';
      } else {
        return 'other-column';
      }
    },
    // mode: 'external',
    actions: {
      add: true,
      edit: true,
      'delete': true,
      showCustomDuringEdit: true,
      showCustomDuringView: true,
      /*custom: [
        {
          name: 'custom',
          title: 'custom action',
          showFunction: ( row ) => {
            return row.getData().id === 1;
          },
          optionItems: [
            { value: 1, description: '1' },
            { value: 2, description: '2' },
          ],
          type: 'select',
          defaultSelection: { value: 1, description: '1' },
        },
      ],*/
    },
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'name',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.completerSet,
              searchFields: 'name',
              titleField: 'name',
            },
          },
        },
        isEditableFunction: ( cell ) => {
          return cell.getColumn().isEditable;
        },
      },
      username: {
        title: 'User Name',
        /*inputFormatFunction: ( value: string ) => {
          value = value.replace( /[\$\%]/g, '' );
          if ( value.length === 0 ) {
            return value;
          }

          return `$${value}`;
        },*/
      },
      email: {
        title: 'Email',
      },
      /* test: {
         title: 'test column',
         editable: false,
         type: 'html',
       },*/
    },
  };


  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      test: '<span> test text</span>',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      test: '<span> test text</span>',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      test: '<span> test text</span>',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      test: '<span> test text</span>',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];
}
