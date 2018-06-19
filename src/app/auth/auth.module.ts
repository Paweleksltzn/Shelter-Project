import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRouting } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
    AuthRouting,
    FormsModule
    ],
    declarations: [
        SignInComponent
    ]
})
export class AuthModule {}
