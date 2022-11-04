import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `<p-table [value]="tableData">
  <ng-template pTemplate="header">
      <tr>
      <th *ngFor="let col of cols" [pSortableColumn]="col.field">
      {{col.header}}<p-sortIcon *ngIf="isSortable" [field]="col.field"></p-sortIcon>
  </th>
      </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
  <ng-container 
  [ngTemplateOutlet]="templateRef" 
  [ngTemplateOutletContext]="{$implicit: item}">
</ng-container>
</ng-template>
</p-table>`,
  styles: [``],
})
export class TableComponent {
  @Input() tableData: any[];
  @Input() cols: any[];
  isSortable: false;

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
}
