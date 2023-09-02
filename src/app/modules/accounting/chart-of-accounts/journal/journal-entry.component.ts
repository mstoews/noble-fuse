import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconsModule } from 'app/core/icons/icons.module';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-journal-entry',
  standalone: true,
  imports: [CommonModule, DxDataGridModule,
    DxBulletModule, DxTemplateModule,
    MatSidenavModule, MatCardModule,
    IconsModule, ReactiveFormsModule,
    MatIconModule,FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './journal-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalEntryComponent {
sTitle: any;
accountsForm: any;

    journalHeader$: any;

    onUpdate(arg0: any) {
        throw new Error('Method not implemented.');
        }
    onCreate() {
        throw new Error('Method not implemented.');
        }
    closeDrawer() {
        throw new Error('Method not implemented.');
        }
    onDelete(arg0: any) {
        throw new Error('Method not implemented.');
        }

}
