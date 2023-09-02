import { CdkScrollable } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { GeneralLedgerComponent } from '../chart-of-accounts/accounts-payable-ledger.component';
import { GlTypesComponent } from '../gl-types/gl-types.component';

@Component({
    selector     : 'gl-main',
    templateUrl  : './gl.main.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatIconModule, RouterLink, MatButtonModule, CdkScrollable, MatTabsModule, GeneralLedgerComponent, GlTypesComponent  ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlMainComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
