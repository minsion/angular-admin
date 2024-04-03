import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { BoxedLockscreenComponent } from './boxed-lockscreen';
import { BoxedPasswordResetComponent } from './boxed-password-reset';
import { BoxedSigninComponent } from './boxed-signin';
import { BoxedSignupComponent } from './boxed-signup';
import { CoverLockscreenComponent } from './cover-lockscreen';
import { CoverLoginComponent } from './cover-login';
import { CoverPasswordResetComponent } from './cover-password-reset';
import { CoverRegisterComponent } from './cover-register';

// headlessui
import { MenuModule } from 'headlessui-angular';

const routes: Routes = [
    { path: 'auth/boxed-lockscreen', component: BoxedLockscreenComponent, title: 'Boxed Lockscreen | VRISTO - Multipurpose Tailwind Dashboard Template' },
    {
        path: 'auth/boxed-password-reset',
        component: BoxedPasswordResetComponent,
        title: 'Boxed Password Reset | VRISTO - Multipurpose Tailwind Dashboard Template',
    },
    { path: 'auth/boxed-signin', component: BoxedSigninComponent, title: 'Boxed Signin | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'auth/boxed-signup', component: BoxedSignupComponent, title: 'Boxed Signup | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'auth/cover-lockscreen', component: CoverLockscreenComponent, title: 'Cover Lockscreen | VRISTO - Multipurpose Tailwind Dashboard Template' },
    { path: 'auth/cover-login', component: CoverLoginComponent, title: 'Cover Login | VRISTO - Multipurpose Tailwind Dashboard Template' },
    {
        path: 'auth/cover-password-reset',
        component: CoverPasswordResetComponent,
        title: 'Cover Password Reset | VRISTO - Multipurpose Tailwind Dashboard Template',
    },
    { path: 'auth/cover-register', component: CoverRegisterComponent, title: 'Cover Register | VRISTO - Multipurpose Tailwind Dashboard Template' },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MenuModule, IconModule],
    declarations: [
        BoxedLockscreenComponent,
        BoxedPasswordResetComponent,
        BoxedSigninComponent,
        BoxedSignupComponent,
        CoverLockscreenComponent,
        CoverLoginComponent,
        CoverPasswordResetComponent,
        CoverRegisterComponent,
    ],
})
export class AuthModule {}
