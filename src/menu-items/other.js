// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Perfil',
            type: 'item',
            url: '/perfil',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'saldo-inicial',
            title: 'Saldo Inicial',
            type: 'item',
            url: '/saldo-inicial',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default other;
