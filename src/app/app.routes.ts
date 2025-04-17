import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';

export const routes: Routes = [
    {
        path : "login" , component : LoginComponent
    },
    {
        path: "contact" , component : ContactComponent
    },
    {
        path : "about" , component :AboutComponent
    },
    {
        path : "home" , component : HomeComponent
    }
    ,
    {
        path : "user/:id/:name" , component : DynamicRoutingComponent
    }
];
