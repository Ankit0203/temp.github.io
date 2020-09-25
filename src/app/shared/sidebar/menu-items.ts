import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

{
  path: "/forms/ngx",
  title: "Insurance Recommender",
  icon: "mdi mdi-attachment",
  class: "",
  extralink: false,
  submenu: [],
},
{
  path: '/dash-board',
  title: 'Dashboard',
  icon: 'mdi mdi-home',
  class: '',
  extralink: false,
  submenu: []
},
{
  path: '/my-profile',
  title: 'My Profile',
  icon: 'mdi mdi-account',
  class: '',
  extralink: false,
  submenu: []
},
{
  path: '/company-packages',
  title: 'Company Packages',
  icon: 'mdi mdi-close-octagon',
  class: '',
  extralink: false,
  submenu: []
},
{
  path: '',
  title: 'Billing',
  icon: 'mdi mdi-rocket',
  class: 'has-arrow',
  extralink: false,
  submenu: [
    {
      path: '/my-subscription',
      title: 'My Subscription',
      icon: 'mdi mdi-adjust',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/manager-subscription',
      title: 'Manager Subscription',
      icon: 'mdi mdi-adjust',
      class: '',
      extralink: false,
      submenu: []
    },
  ]
},
{
  path: '/default-carriers',
  title: 'Default Carriers',
  icon: 'mdi mdi-gauge',
  class: '',
  extralink: false,
  submenu: []
},
{
  path: '',
  title: 'Video URL Settings',
  icon: 'mdi mdi-message-video',
  class: 'has-arrow',
  extralink: false,
  submenu: [
    {
      path: '/training-video',
      title: 'Training-Video',
      icon: 'mdi mdi-adjust',
      class: '',
      extralink: false,
      submenu: []
    },
  ]
},
{
  path: '/promotion-banner',
  title: 'Promotion Banner',
  icon: 'mdi mdi-image-filter',
  class: '',
  extralink: false,
  submenu: []
},
{
  path: '/analysis-script',
  title: 'Need Analysis Script',
  icon: 'mdi mdi-image-filter',
  class: '',
  extralink: false,
  submenu: []
},
//----------------------------------------------------------

  // {
  //   path: '',
  //   title: 'UI Components',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },
  {
    path: '',
    title: 'User Management',
    icon: 'mdi mdi-diamond',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/user-master',
        title: 'User Master',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/delete-user',
        title: 'Deleted User',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/send-mail-to-user',
        title: 'Send Mail To User',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/assign-agents-under-training',
        title: 'Assign Agents Under Trainer',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/login-activity',
        title: 'Login Activity',
        icon: 'mdi mdi-adjust',
        class: '',
        extralink: false,
        submenu: []
      },
     
    ]
  }
];
