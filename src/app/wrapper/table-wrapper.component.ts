import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Model {
  name: string;
  alter: string;
  id: number;
}

@Component({
  selector: 'app-table-wrapper',
  template: `
  <div *ngIf="data$ | async as data">          
  <app-table [tableData]="data" [cols]="cols" >
  <ng-template #templateRef let-item>
  <tr>
  <!--<td>{{item.name}}</td>
  <td>{{item.alter}}</td>
  <td>{{item.id}}</td>-->
  <td *ngFor="let col of cols">
  {{item[col.field]}}
</td>
  </tr>
  </ng-template>
  </app-table>
  </div>
  `,
  styles: [``],
})
export class TableWrapperComponent implements OnInit {
  data$: Observable<Model[]>;
  cols: any[];

  constructor() {
    this.data$ = of([
      { name: 'Mario', alter: '12', id: 1 },
      { name: 'Luigi', alter: '11', id: 2 },
      { name: 'Zelda', alter: '15', id: 2 },
    ]);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'alter', header: 'Alter' },
      { field: 'id', header: 'ID' },
    ];
  }

  ngOnInit() {}
}
