import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
    declarations: [
        HomepageComponent,
        ContactsComponent
    ],
    exports: [
        HomepageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
