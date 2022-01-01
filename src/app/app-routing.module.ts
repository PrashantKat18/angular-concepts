import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'databinding',
    loadChildren:() => import('./databinding/databinding.module').then(m=> m.DatabindingModule)
  },
  {
    path:'authentication',
    loadChildren:() => import('./authentication/authentication-routing.module').then(m=>m.AuthenticationRoutingModule)
  },
  {
    path:'dependencyInjection',
    loadChildren:()=> import('./dependency-injection/dependency-injection.module').then(m=>m.DependencyInjectionModule)
  },
  {
    path:'directives',
    loadChildren:()=> import('./directive/directive.module').then(m=>m.DirectiveModule)
  },
  {
    path:'forms',
    loadChildren:()=> import('./forms/forms-routing.module').then(m=>m.FormsRoutingModule)
  },
  {
    path:'interceptor',
    loadChildren:()=> import('./interceptor/interceptor-routing.module').then(m=>m.InterceptorRoutingModule)
  },
  {
    path:'lazyLoading',
    loadChildren:()=> import('./lazy-loading/lazy-loading-routing.module').then(m=>m.LazyLoadingRoutingModule)
  },
  {
    path:'lifecycle',
    loadChildren:()=> import('./lifecycle/lifecycle-routing.module').then(m=>m.LifecycleRoutingModule)
  },
  {
    path:'lvycompiler',
    loadChildren:()=> import('./lvy-compiler/lvy-compiler-routing.module').then(m=>m.LvyCompilerRoutingModule)
  },
  {
    path:'pipes',
    loadChildren:()=> import('./pipes/pipes-routing.module').then(m=>m.PipesRoutingModule)
  },
  {
    path:'routeguard',
    loadChildren:()=> import('./routeguard/routeguard-routing.module').then(m=>m.RouteguardRoutingModule)
  },
  {
    path:'promises',
    loadChildren:()=> import('./promises/promises-routing.module').then(m=>m.PromisesRoutingModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
