import {
    DashboardOutlined, FileTextOutlined,
    GiftOutlined,
    MailOutlined,
    PictureOutlined, SettingOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    MobileOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const MainNavTree = [
    {
        key: 'main',
        path: `${APP_PREFIX_PATH}/main`,
        title: 'sidenav.main',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: 'main-dashboard',
                path: `${APP_PREFIX_PATH}/main/dashboard`,
                title: 'sidenav.main.dashboard',
                icon: ShoppingCartOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-catalog',
                path: `${APP_PREFIX_PATH}/main/catalog`,
                title: 'sidenav.main.catalog',
                icon: ShoppingCartOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'main-catalog-tovar',
                        path: `${APP_PREFIX_PATH}/main/catalog/tovar`,
                        title: 'sidenav.main.catalog.tovar',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-catalog-categories',
                        path: `${APP_PREFIX_PATH}/main/catalog/categories`,
                        title: 'sidenav.main.catalog.categories',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-catalog-collection',
                        path: `${APP_PREFIX_PATH}/main/catalog/collection`,
                        title: 'sidenav.main.catalog.collection',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-catalog-combo',
                        path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                        title: 'sidenav.main.catalog.combo',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                ]
            },
            {
                key: 'main-orders',
                path: `${APP_PREFIX_PATH}/main/orders`,
                title: 'sidenav.main.orders',
                icon: ShoppingOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-clients',
                path: `${APP_PREFIX_PATH}/main/clients`,
                title: 'sidenav.main.clients',
                icon: UserOutlined,
                breadcrumb: false,
                submenu: [{
                    key: 'main-clients-clientlist',
                    path: `${APP_PREFIX_PATH}/main/clients/clientlist`,
                    title: 'sidenav.main.clients.clientlist',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },{
                    key: 'main-clients-clientgroups',
                    path: `${APP_PREFIX_PATH}/main/clients/clientgroups`,
                    title: 'sidenav.main.clients.clientgroups',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                ]
            },
            {
                key: 'main-banners',
                path: `${APP_PREFIX_PATH}/main/banners`,
                title: 'sidenav.main.banners',
                icon: PictureOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-proms',
                path: `${APP_PREFIX_PATH}/main/proms`,
                title: 'sidenav.main.proms',
                icon: GiftOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-offlinedots',
                path: `${APP_PREFIX_PATH}/main/offlinedots`,
                title: 'sidenav.main.offlinedots',
                icon: ShopOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'main-offlinedots-addres',
                        path: `${APP_PREFIX_PATH}/main/offlinedots/addres`,
                        title: 'sidenav.main.offlinedots.addres',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-offlinedots-geozones',
                        path: `${APP_PREFIX_PATH}/main/offlinedots/geozones`,
                        title: 'sidenav.main.offlinedots.geozones',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                ]
            },
            {
                key: 'main-team',
                path: `${APP_PREFIX_PATH}/main/team`,
                title: 'sidenav.main.team',
                icon: UsergroupAddOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-news',
                path: `${APP_PREFIX_PATH}/main/news`,
                title: 'sidenav.main.news',
                icon: MailOutlined,
                breadcrumb: false,
                submenu: []
            },
        ]
    }]
const SysSettings = [
    {
        key: 'sysset',
        path: `${APP_PREFIX_PATH}/sysset`,
        title: 'sidenav.sysset',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: 'sysset-settings',
                path: `${APP_PREFIX_PATH}/sysset/settings`,
                title: 'sidenav.sysset.settings',
                icon: SettingOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'sysset-mobview',
                path: `${APP_PREFIX_PATH}/sysset/mobview`,
                title: 'sidenav.sysset.mobview',
                icon: MobileOutlined ,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'sysset-logs',
                path: `${APP_PREFIX_PATH}/sysset/logs`,
                title: 'sidenav.sysset.logs',
                icon: FileTextOutlined,
                breadcrumb: false,
                submenu: []
            },

        ]
    }]


const navigationConfig = [
    ...MainNavTree,
    ...SysSettings,

]

export default navigationConfig;
