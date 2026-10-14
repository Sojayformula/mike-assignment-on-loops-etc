import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { PageLayout } from './page-layout/page-layout';
import { routeGuard } from './route-guard';
import { candeactivateGuard } from './candeactivate-guard';

export const routes: Routes = [

    {path: "", component: PageLayout,
        children:[
    {
        path: "", redirectTo: "dashboard", pathMatch: "full"
    },
    {
      path: "dashboard", loadComponent: ()=>import("./dashboard/dashboard").then(m => m.Dashboard),
      
    },
    {
      path: "filters", loadComponent: () => import("./pages/filters/filters").then(m => m.Filters ),
      canActivate:[routeGuard], data: {role: "hr"}
    },
    {
      path: "datananipulation", loadComponent: ()=>import("./pages/datamanipulation/datananipulation").then(m => m.Datananipulation)
    },
    {
      path: "behavioralsubject", loadComponent: ()=>import("./pages/behavioralsubject/behavioralsubject").then(m => m.Behavioralsubject)
    },
    {
      path: "loops", loadComponent: ()=>import("./pages/loops/loops").then(m => m.Loops)
    },
    {
      path: "interceptorpage", loadComponent: ()=>import("./pages/interceptorpage/interceptorpage").then(m => m.Interceptorpage)
    },
    {
      path: "maps", loadComponent: ()=>import("./pages/maps/maps").then(m => m.Maps)
    },
    {
      path: "reduce", loadComponent: ()=>import("./pages/reduce/reduce").then(m => m.Reduce)
    },
    {
      path: "rx-js", loadComponent: ()=>import("./pages/rx-js/rx-js").then(m => m.RxJs)
    },
    {
      path: "signal", loadComponent: ()=>import("./pages/signal/signal").then(m => m.Signal),
      canDeactivate: [candeactivateGuard],
    },
    {
      path: "tanstack", loadComponent: ()=>import("./pages/tanstack/tanstack").then(m => m.Tanstack)
    },

        ]

    }


    
];
