import { SignupComponent } from './auth/signup/signup.component';
import { ForgotUsernameComponent } from './auth/forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NeedAnalysisScriptComponent } from './component/pages/need-analysis-script/need-analysis-script.component';
import { PromotionBannerComponent } from './component/pages/promotion-banner/promotion-banner.component';
import { TrainingVideoComponent } from './component/video-url-settings/training-video/training-video.component';
import { DefaultCarriersComponent } from './component/pages/default-carriers/default-carriers.component';
import { ManagerSubscriptionComponent } from './component/billing/manager-subscription/manager-subscription.component';
import { MySubscriptionComponent } from './component/billing/my-subscription/my-subscription.component';
import { CompanyPackagesComponent } from './component/pages/company-packages/company-packages.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
     
      {path : 'dash-board', component : DashboardComponent},

      { path : 'my-profile', component :ProfileComponent },

      { path : 'company-packages', component : CompanyPackagesComponent },
      
      { path : 'my-subscription', component : MySubscriptionComponent },

      { path : 'manager-subscription', component : ManagerSubscriptionComponent},

      { path : 'default-carriers', component : DefaultCarriersComponent},

      { path : 'training-video', component : TrainingVideoComponent },

      { path : 'promotion-banner', component : PromotionBannerComponent },

      { path : 'analysis-script', component : NeedAnalysisScriptComponent },
     
      // { path: 'forms', loadChildren: () => import('./ngx-wizard/forms.module').then(m => m.FormModule) },
      

      {path : 'component', loadChildren: './component/component.module#ComponentsModule'},

      {path : 'forms', loadChildren: './ngx-wizard/forms.module#FormModule'}

      // { path: 'component',
      //  loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      // }
    ]
  },
  {path : 'forgot-password', component : ForgotPasswordComponent},

  {path : 'forgot-username', component : ForgotUsernameComponent },

  {path : 'signup', component : SignupComponent},
  
  { path: '**', redirectTo: '/login'},

  { path: 'login', component: LoginComponent},
  
];
