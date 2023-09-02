import { inject, Injectable } from '@angular/core'
import { Auth, authState, User, getAuth } from '@angular/fire/auth'
import { map, filter, withLatestFrom, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {

    AccountingSnap,
    GeneralLedgerAccount,
    AccountType,
    AccountTypeSnap,
    AccountingListUpdate,
    NobleLedgerUser,
    AccountUpdate,
    GLJournalDetail,
    GLJournalHeaderSnap,
    GLJournalHeader,
    GLJournalDetailSnap,
    GLJournalDetailUpdate,
    GLJournalHeaderUpdate,

} from '../models'
import {
    collection,
    collectionData,
    CollectionReference,
    doc,
    docData,
    Firestore,
    setDoc,
    addDoc,
    deleteDoc,
    query,
    orderBy,
    arrayUnion,
    arrayRemove,
} from '@angular/fire/firestore'
import { environment } from 'environments/environment'


@Injectable({
    providedIn: 'root',
})
export class GeneralLedgerService {
    firestore = inject(Firestore);
    http = inject(HttpClient);
    auth = inject(Auth);
    private jwtAuth: string | null;

    // Create a user observable
    user$ = authState(this.auth).pipe(
        filter(user => user !== null),
        map(user => user!),
    )

    createAdminUser(uid: string)   {
        // getAuth().currentUser?.getIdToken(true).then((token) => {
        //     this.jwtAuth = token;
        //   }
        // ).catch((error) => {
        //     console.log(error);
        // });

        // const headers = new HttpHeaders().set(
        //     'Authorization',
        //     this.jwtAuth as string
        //   );
        // return this.http.post(
        //     environment.api.createAdmin,
        //     { uid },
        //     { headers }
        //   );
    }

    // Journal Entry Header
    journalHeaderRef<T = GLJournalHeaderSnap | GLJournalHeader>(journal_id: string) {
        const glCol = collection(this.firestore, 'journal-entry-header') as CollectionReference<T>;
        return doc<T>(glCol, journal_id);
    }
    journalHeaderCol<T = GLJournalHeaderSnap | GLJournalHeader>(journal_id: string) {
        const ref = this.journalHeaderRef<GLJournalHeaderSnap>(journal_id);
        return collection(ref, journal_id)  as CollectionReference<T>;
    }

    // Journal Entry Detail
    journalDetailRef<T = GLJournalDetailSnap | GLJournalDetail>(journal_id: string, journal_detail_id: string) {
        const glCol = collection(this.firestore, 'journal-entry-detail') as CollectionReference<T>;
        return doc<T>(glCol, journal_id + '-' + journal_detail_id);
    }

    journalDetailCol<T = GLJournalDetailSnap | GLJournalDetail>(journal_id: string, journal_detail_id: string) {
        const ref = this.journalDetailRef<GLJournalDetailSnap>(journal_id, journal_detail_id);
        return collection(ref, journal_id + '-' + journal_detail_id) as CollectionReference<T>;
    }


    // Create gl_accounts reference
    accountingRef<T = GeneralLedgerAccount | AccountingSnap>(parent: string, child: string) {
        const glCol = collection(this.firestore, 'gl-accounts') as CollectionReference<T>;
        return doc<T>(glCol, parent + '-' + child);
    }

    // Gl account collection
    accountingCol<T = AccountingSnap | GeneralLedgerAccount>(parent: string, child: string) {
        const ref = this.accountingRef<AccountingSnap>(parent, child);
        return collection(ref, 'gl-accounts') as CollectionReference<T>;
    }

    // gl_acccounts observable
    glaccounts$(parent: string, child: string) {
        const ref = this.accountingCol<AccountingSnap>(parent, child);
        return collectionData(ref, { idField: 'id' });
    }

    // Create gl_accounts observable
    async updateCurrentAccount(account: Partial<GeneralLedgerAccount>) {
        const dDate = new Date();
        const updateDate = dDate.toISOString().split('T')[0];
        account.updateDate = updateDate;
        account.updateUsr = 'Admin';
        account.createDate = updateDate;
        account.createUsr = 'Admin';
        const accountRef = this.accountingRef(account.parent, account.child);
        return setDoc(accountRef, account, { merge: true })
    }

    async deleteCurrentAccount(account: Partial<GeneralLedgerAccount>) {
        const accountRef = this.accountingRef(account.parent, account.child);
        return deleteDoc(accountRef);
    }

    // Create gl_accounts reference
    allAccountingRef<T = GeneralLedgerAccount | AccountingSnap>() {
        const glCol = collection(this.firestore, 'gl-accounts') as CollectionReference<T>;
        return doc<T>(glCol);
    }

    // Create a all accounts observable
    allAccounts$() {
        const accountCollection = collection(this.firestore, 'gl-accounts') as CollectionReference<GeneralLedgerAccount>;
        return collectionData(accountCollection, { idField: 'id' })
    }


    // GL Type reference
    typeRef<T = AccountType | AccountTypeSnap>(type: string) {
        const gltypeCollection = collection(this.firestore, 'gl-type') as CollectionReference<T>;
        return doc<T>(gltypeCollection, type);
    }

    // GL Type collection
    typeCol<T = AccountType | AccountTypeSnap>(type: string) {
        const ref = this.typeRef<AccountTypeSnap>(type);
        return collection(ref, 'gl-types') as CollectionReference<T>;
    }

    // GL Type observable
    gltypes$(type: string) {
        const ref = this.typeCol<AccountTypeSnap>(type);
        return collectionData(ref, { idField: 'id' });
    }

    // Update
    async updateType(account_type: Partial<AccountType>) {
        const dDate = new Date();
        const updateDate = dDate.toISOString().split('T')[0];
        account_type.updateDate = updateDate;
        account_type.updateUsr = 'Admin';
        const Ref = this.typeRef(account_type.type);
        return setDoc(Ref, account_type, { merge: true })
    }

    // Delete
    async deleteType(type: Partial<AccountType>) {
        const Ref = this.typeRef(type.type);
        return deleteDoc(Ref);
    }

    // type ref
    allTypeRef<T = AccountType | AccountTypeSnap>() {
        const glCol = collection(this.firestore, 'gl-type') as CollectionReference<T>;
        return doc<T>(glCol);
    }

    // get types
    allTypes$() {
        const typeCollection = collection(this.firestore, 'gl-type') as CollectionReference<AccountType>;
        return collectionData(typeCollection, { idField: 'id' })
    }


}
