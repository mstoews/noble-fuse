import { ChangeDetectionStrategy, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
} from 'devextreme-angular';

import { GeneralLedgerAccount} from 'app/modules/models';
import { GeneralLedgerService } from 'app/modules/services/accounting.service';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IconsModule } from 'app/core/icons/icons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'app-general-ledger',
    standalone: true,
    imports: [CommonModule, DxDataGridModule,
              DxBulletModule, DxTemplateModule,
              MatSidenavModule, MatCardModule,
              ReactiveFormsModule,
              MatIconModule,FormsModule, MatFormFieldModule, MatInputModule ],
    templateUrl: './general-ledger.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralLedgerComponent implements OnInit{
    // Inject the modules
    private generalLedgerService = inject(GeneralLedgerService);
    private fb = inject(FormBuilder);

    // local variables
    @ViewChild('drawer') drawer: MatDrawer;
    collapsed = false;
    sTitle='General Ledger Accounts';
    selectedItemKeys: any[] = [];

    drawOpen: 'open' | 'close' = 'open';

    customizeTooltip = (pointsInfo) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });
    accountsForm: FormGroup;
    accounts$ = this.generalLedgerService.allAccounts$();

    ngOnInit() {
        this.createEmptyForm();
    }

    createEmptyForm() {
        this.accountsForm = this.fb.group({
            parent: [''],
            child: [''],
            name: [''],
            balance: [''],
            type: [''],
            description: [''],
        });
      }

    updateAccount() {
        const dDate = new Date();
        const updateDate = dDate.toISOString().split('T')[0];
        const account: Partial<GeneralLedgerAccount> = {
            parent: '1000',
            child: '1000',
            name: 'Cash Account 1',
            balance: 1000,
            type: 'Asset',
            description: 'Cash in Bank',
            createDate: updateDate,
            updateDate: updateDate,
            updateUsr: 'mst',
            createUsr: 'mst',
        };

        this.generalLedgerService.updateCurrentAccount(account);
    }

    closeDialog() {
        throw new Error('Method not implemented.');
    }
    onImages() {
        throw new Error('Method not implemented.');
    }
    onDelete(account: Partial<GeneralLedgerAccount>) {
        this.generalLedgerService.deleteCurrentAccount(account);
        this.closeDrawer();
    }

    onCreate() {
        this.createEmptyForm();
        this.openDrawer();
    }

    onUpdate(account: Partial<GeneralLedgerAccount>) {
        this.generalLedgerService.updateCurrentAccount(account);
        this.closeDrawer();
    }

    selectionChanged(data: any) {
        console.log(`selectionChanged ${JSON.stringify(data.data)}`);
        this.selectedItemKeys = data.selectedRowKeys;
    }
    onCellDoublClicked(e: any) {
        console.log(`selectionChanged ${JSON.stringify(e.data)}`);
        this.accountsForm = this.fb.group({
            parent: [e.data.parent],
            child: [e.data.child],
            name: [e.data.name],
            balance: [e.data.balance],
            type: [e.data.type],
            description: [e.data.description],
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
