import { Component } from '@angular/core';

@Component( {
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
} )
export class BasicExampleDataComponent {

  completerSet = [
    { name: 'John' },
    { name: 'Josh' },
    { name: 'Rachel' },
    { name: 'David' },
    { name: 'Joanna' },
    { name: 'Michael' },
  ];

  settings = {
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
          return cell.getColumn().isEditable && cell.isNew;
        },
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
      test: {
        title: 'test column',
        editable: false,
        type: 'html',
      },
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
