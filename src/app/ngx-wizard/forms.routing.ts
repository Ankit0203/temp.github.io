import { Routes } from '@angular/router';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'ngx',
      //   loadChildren: () => import('./ngx-wizard.module').then(m => m.NGXFormWizardModule)
      // }
      {path : 'ngx', loadChildren: './ngx-wizard.module#NGXFormWizardModule'}, 
    ]
  }
];
