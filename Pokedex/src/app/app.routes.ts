import { Routes } from '@angular/router';
import { List } from '../list/list';

export const routes: Routes = [
    {path: ':name',
        loadComponent: () => import('../details/details')
    },
    {path:'', component:List},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];
