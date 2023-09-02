/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'main',
        title: 'Home Page',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/example'
    },
    {
        id: 'accounting',
        title: 'Accounting',
        subtitle: 'Financial and Management Accounting',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'accounting.general-ledger',
                title: 'General Ledger',
                type: 'basic',
                icon: 'heroicons_outline:check',
                link: '/gl',
            },
            {
                id: 'accounting.accounts-receivable',
                title: 'Accounts Receivable',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/general_ledger/accounts-receivable',
            },
            {
                id: 'accounting.accounts-payable',
                title: 'Accounts Payable',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/general_ledger/accounts-payable',
            },

            {
                id: 'accounts.tabs',
                title: 'Transaction Analysis',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/accounts/gl-tabs',
            },
            {
                id: 'accounting.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/accounts/test',
            },
            {
                id: 'accounting.overview',
                title: 'Overview',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/accounting/overview',
            },

        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    } ,


            {
                id: 'accounting.general-ledger',
                title: 'General Ledger',
                type: 'basic',
                icon: 'heroicons_outline:check',
                link: '/gl',
            },
            {
                id: 'accounting.accounts-receivable',
                title: 'Accounts Receivable',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/general_ledger/accounts-receivable',
            },
            {
                id: 'accounting.accounts-payable',
                title: 'Accounts Payable',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/general_ledger/accounts-payable',
            },

            {
                id: 'accounts.tabs',
                title: 'Transation Analysis',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/accounts/gl-tabs',
            },
            {
                id: 'accounting.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/accounts/test',
            },
            {
                id: 'accounting.overview',
                title: 'Overview',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/accounting/overview',
            },

];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    {
        id: 'accounting',
        title: 'Accounting',
        subtitle: 'Financial and Management Accounting',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'accounting.general-ledger',
                title: 'General Ledger',
                type: 'basic',
                icon: 'heroicons_outline:check',
                link: '/gl',
            },
            {
                id: 'accounting.accounts-receivable',
                title: 'Accounts Receivable',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/general_ledger/accounts-receivable',
            },
            {
                id: 'accounting.accounts-payable',
                title: 'Accounts Payable',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/general_ledger/accounts-payable',
            },

            {
                id: 'accounts.tabs',
                title: 'Transation Analysis',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/accounts/gl-tabs',
            },
            {
                id: 'accounting.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/accounts/test',
            },
            {
                id: 'accounting.overview',
                title: 'Overview',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/accounting/overview',
            },

        ],
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    {
        id: 'accounting',
        title: 'Accounting',
        subtitle: 'Financial and Management Accounting',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'accounting.general-ledger',
                title: 'General Ledger',
                type: 'basic',
                icon: 'heroicons_outline:check',
                link: '/gl',
            },
            {
                id: 'accounting.accounts-receivable',
                title: 'Accounts Receivable',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/general_ledger/accounts-receivable',
            },
            {
                id: 'accounting.accounts-payable',
                title: 'Accounts Payable',
                type: 'basic',
                icon: 'heroicons_outline:credit-card',
                link: '/general_ledger/accounts-payable',
            },

            {
                id: 'accounts.tabs',
                title: 'Transation Analysis',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/accounts/gl-tabs',
            },
            {
                id: 'accounting.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/accounts/test',
            },
            {
                id: 'accounting.overview',
                title: 'Overview',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/accounting/overview',
            },

        ],
    },
];
