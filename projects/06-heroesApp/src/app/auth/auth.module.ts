import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routhing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
