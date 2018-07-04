import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRouting } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './ngrx/auth.reducer';

@NgModule({
    imports: [
    CommonModule,
    AuthRouting,
    FormsModule,
    StoreModule.forFeature('auth', authReducer)
    ],
    declarations: [
        SignInComponent
    ]
})
export class AuthModule {}
