import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';
import { ComponentsRoutes } from './component.routing';
import { UserMasterComponent } from './userManagement/user-master/user-master.component';
import { AssignAgentsUnderTrainerComponent } from './userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component';
import { SendMailToUserComponent } from './userManagement/send-mail-to-user/send-mail-to-user.component';
import { DeleteUserComponent } from './userManagement/delete-user/delete-user.component';
import { LoginActivityComponent } from './userManagement/login-activity/login-activity.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CompanyPackagesComponent } from './pages/company-packages/company-packages.component';
import { DefaultCarriersComponent } from './pages/default-carriers/default-carriers.component';
import { PromotionBannerComponent } from './pages/promotion-banner/promotion-banner.component';
import { NeedAnalysisScriptComponent } from './pages/need-analysis-script/need-analysis-script.component';
import { MySubscriptionComponent } from './billing/my-subscription/my-subscription.component';
import { ManagerSubscriptionComponent } from './billing/manager-subscription/manager-subscription.component';
import { TrainingVideoComponent } from './video-url-settings/training-video/training-video.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormComponent } from './pages/form/form.component';
import { CheckoutFormComponent } from './pages/company-packages/checkout-form/checkout-form.component';
import { DetailFormComponent } from './pages/company-packages/detail-form/detail-form.component';
import { CreateEmailComponent } from './userManagement/send-mail-to-user/create-email/create-email.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NotifierModule,
    Ng2SearchPipeModule,
    NgxDatatableModule,
  ],
  declarations: [
    UserMasterComponent,
    DeleteUserComponent,
    SendMailToUserComponent,
    AssignAgentsUnderTrainerComponent,
    LoginActivityComponent,
    DashboardComponent,
    ProfileComponent,
    CompanyPackagesComponent,
    DefaultCarriersComponent,
    PromotionBannerComponent,
    NeedAnalysisScriptComponent,
    MySubscriptionComponent,
    ManagerSubscriptionComponent,
    TrainingVideoComponent,
    FormComponent,
    CheckoutFormComponent,
    DetailFormComponent,
    CreateEmailComponent,
    ChangePasswordComponent,
 ],
  providers : []
})


export class ComponentsModule {}
