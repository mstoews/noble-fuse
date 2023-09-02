import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { IconsModule } from 'app/core/icons/icons.module';
import { AccountType,  } from 'app/models';
import { GeneralLedgerService } from 'app/services/accounting.service';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-gl-types',
  standalone: true,
  templateUrl: './gl-types.component.html',
  imports: [CommonModule, DxDataGridModule,
    DxBulletModule, DxTemplateModule,
    MatSidenavModule, MatCardModule,
    IconsModule, ReactiveFormsModule,
    MatIconModule,FormsModule, MatFormFieldModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlTypesComponent {
    private generalLedgerService = inject(GeneralLedgerService);
    private fb = inject(FormBuilder);

    // local variables
    @ViewChild('drawer') drawer: MatDrawer;
    collapsed = false;
    sTitle='Chart of Accounts Types';
    selectedItemKeys: any[] = [];

    drawOpen: 'open' | 'close' = 'open';

    customizeTooltip = (pointsInfo) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });
    typesForm: FormGroup;
    types$ = this.generalLedgerService.allTypes$();

    ngOnInit() {
        this.createEmptyForm();
        this.updateType();
    }

    createEmptyForm() {
        this.typesForm = this.fb.group({
          type:   [''],
          range:   [''],
          reporting:   [''],
          description:  [''],
        });
      }

    updateType() {

        const type: Partial<AccountType> = {
            type:     'Liability',
            range:     '3000-4000',
            reporting:  'Balance Sheet',
            description: 'Long Term Liabilities',
            balance:  0,
            updateDate:  '06/23/2023',
            updateUsr:  'admin',
            createDate:  '06/23/2023',
            createUsr:  'admin'
          };
        this.generalLedgerService.updateType(type);
        this.closeDrawer();
    }


    onDelete(account: Partial<AccountType>) {
        this.generalLedgerService.deleteCurrentAccount(account);
        this.closeDrawer();
    }

    onCreate() {
        this.createEmptyForm();
        this.openDrawer();
    }

    onUpdate(account: Partial<AccountType>) {
        this.generalLedgerService.updateCurrentAccount(account);
        this.closeDrawer();
    }

    selectionChanged(data: any) {
        console.log(`selectionChanged ${JSON.stringify(data.data)}`);
        this.selectedItemKeys = data.selectedRowKeys;
    }

    onCellDoublClicked(e: any) {
        console.log(`selectionChanged ${JSON.stringify(e.data)}`);
        this.typesForm = this.fb.group({
            type:   [e.data.type],
            range:   [e.data.range],
            reporting:   [e.data.reporting],
            description:  [e.data.description],
          });
        this.openDrawer();
    }

    onFocusedRowChanged(e: any) {
        console.log(`selectionChanged ${JSON.stringify(e.data)}`);
    }

    openDrawer() {
        const opened = this.drawer.opened;
        if (opened !== true) {
          this.drawer.toggle();
        } else {
          return;
        }
      }

      closeDrawer() {
        const opened = this.drawer.opened;
        if (opened === true) {
          this.drawer.toggle();
        } else {
          return;
        }
      }
}
