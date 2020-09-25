import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CreateEmailComponent } from './userManagement/send-mail-to-user/create-email/create-email.component';
import { DetailFormComponent } from './pages/company-packages/detail-form/detail-form.component';
import { MySubscriptionComponent } from './billing/my-subscription/my-subscription.component';
import { FormComponent } from './pages/form/form.component';


import { Routes } from '@angular/router';
import { AssignAgentsUnderTrainerComponent } from './userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component';
import { DeleteUserComponent } from './userManagement/delete-user/delete-user.component';
import { LoginActivityComponent } from './userManagement/login-activity/login-activity.component';
import { SendMailToUserComponent } from './userManagement/send-mail-to-user/send-mail-to-user.component';
import { UserMasterComponent } from './userManagement/user-master/user-master.component';


export const ComponentsRoutes: Routes = [
//User Management Routing Start

	{
		path: '',
		children: [
			{
				path: 'assign-agents-under-training',
				component: AssignAgentsUnderTrainerComponent,
				data: {
					title: 'Assign Agents Under Training',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Assign Agents Under Training' }
					]
				}
			},
			{
				path: 'delete-user',
				component: DeleteUserComponent,
				data: {
					title: 'Delete User',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Delete User' }
					]
				}
			},
			{
				path: 'login-activity',
				component: LoginActivityComponent,
				data: {
					title: 'Login Activity',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Login Activity' }
					]
				}
			},
			{
				path: 'send-mail-to-user',
				component: SendMailToUserComponent,
				data: {
					title: 'Send Mail To User',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Send Mail To User' }
					]
				}
			},
			{
				path: 'user-master',
				component: UserMasterComponent,
				data: {
					title: 'User Master',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'User Master' }
					]
				}
			},
			{
				path: 'email',
				component: CreateEmailComponent,
				data: {
					title: 'Create Email',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Create Email' }
					]
				}
			},
			{
				path: 'form',
				component: FormComponent,
				data: {
					title: 'Form',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Form' }
					]
				}
			},
			{
				path: 'subscription',
				component: MySubscriptionComponent,
				data: {
					title: 'Subscription Details',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Subscription Details' }
					]
				}
			},
			{
				path: 'subscription-details',
				component: DetailFormComponent,
				data: {
					title: 'Subscription Details',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Subscription Details' }
					]
				}
			},
			//-------------------User Management Routing End--------------------------
			{
				path: 'change-password',
				component: ChangePasswordComponent,
				data: {
					title: 'Change Password',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Change Password' }
					]
				}
			},
		]	
	},
	
			
];
