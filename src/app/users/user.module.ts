import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { UserAccountSettingsComponent } from './user-account-settings';
import { ProfileComponent } from './profile';

const routes: Routes = [
    {
        path: 'users/user-account-settings',
        component: UserAccountSettingsComponent,
        title: 'Account Setting | VRISTO - Multipurpose Tailwind Dashboard Template',
    },
    { path: 'users/profile', component: ProfileComponent, title: 'User Profile | VRISTO - Multipurpose Tailwind Dashboard Template' },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, IconModule],
    declarations: [UserAccountSettingsComponent, ProfileComponent],
})
export class UsersModule {}
