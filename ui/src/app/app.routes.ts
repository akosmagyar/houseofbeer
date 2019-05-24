import {HomeComponent} from "./home/home.component";
import {BrewingsComponent} from "./brewings/brewings.component";
import {Routes} from '@angular/router';
//import {GameComponent} from "./game/game.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";


export const appRoutes : Routes = [
    {path : 'brewings', component: BrewingsComponent},
    {path: 'home', component: HomeComponent},
    //{path: 'game', component: GameComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: HomeComponent}

];
