import type { User } from "firebase/auth";
import { DocumentReference, Timestamp, FieldValue } from "firebase/firestore";

/**
 * accounts
 * types
 * distribution ledger
 * trial balance
 * ar - distribution ledger
 * ap - distribution ledger
 * clients
 * vendors
 *
 */

export type ListUpdate<T, K = any> = { key: T, item: K, type: 'added' | 'removed' }

export type OverviewUpdate = ListUpdate<'overview', string>;

export type GLJournalHeaderUpdate = ListUpdate<'gl_journal_header', string>;
export type GLJournalHeaderListUpdate = GLJournalHeaderUpdate | OverviewUpdate;

export type GLJournalDetailUpdate = ListUpdate<'gl_journal_detail', string>;
export type GLJournalDetailListUpdate = GLJournalDetailUpdate | OverviewUpdate;

export type AccountUpdate = ListUpdate<'account', string>;
export type AccountingListUpdate = AccountUpdate | OverviewUpdate;


export type NobleLedgerUserUpdate = ListUpdate<'overview', string>;


export type NobleLedgerUser = {
  photoURL: string | null;
  displayName: string | null;
  uid: string | null;
}

export interface UserRoles {
    admin: boolean;
}

// General Ledger Accounts Lsting
export interface GeneralLedgerAccount {
    parent: string;
    child: string;
    name: string;
    type: string;
    balance: number;
    description: string;
    createDate: string;
    createUsr: string;
    updateDate: string;
    updateUsr: string;
}

export interface AccountsPayableLedger {
    account: string;
    name: string;
    vendor: string;
    type: string;
    description: string;
    createDate: string;
    createUsr: string;
    updateDate: string;
    updateUsr: string;
}

export interface AccountsPayableDetail {
    account: string;
    journal_id: string;
    name: string;
    vendor: string;
    type: string;
    description: string;
    createDate: string;
    createUsr: string;
    updateDate: string;
    updateUsr: string;
}


export interface AccountType {
    type: string;
    range: string;
    reporting: string;
    balance: number;
    description: string;
    createDate: string;
    createUsr: string;
    updateDate: string;
    updateUsr: string;
}

export interface GLJournalHeader {
    journal_id: string;
    journal_date: string;
    journal_type: string;
    journal_description: string;
    journal_total: number;
    journal_status: string;
    journal_create_date: string;
    journal_create_usr: string;
    journal_update_date: string;
    journal_update_usr: string;
}

export interface GLJournalDetail {
    journal_id: string;
    journal_line: number;
    journal_parent_account: string;
    journal_child_account: string;
    journal_name: string;
    journal_description: string;
    journal_debit: number;
    journal_credit: number;
    journal_date: string;
    journal_type: string;
    journal_status: string;
    journal_create_date: string;
    journal_create_usr: string;
    journal_update_date: string;
    journal_update_usr: string;
}


export type GLJournalHeaderRef = DocumentReference<GLJournalHeader>;

export interface GLJournalHeaderSnap extends GLJournalHeader {
    gl_journal_header: GLJournalHeader[];
}

export type GLJournalDetailRef = DocumentReference<GLJournalDetail>;
export interface GLJournalDetailSnap extends GLJournalDetail {
    gl_journal_detail: GLJournalDetail[];
}


export type GeneralLedgerAccountRef = DocumentReference<GeneralLedgerAccount>;
export type AccountTypeRef = DocumentReference<AccountType>;

export interface AccountingSnap extends GeneralLedgerAccount {
    gl_accounts: GeneralLedgerAccount[];
}

// General Ledger Types
export interface AccountTypeSnap extends AccountType {
    gl_types: AccountType[];
}
