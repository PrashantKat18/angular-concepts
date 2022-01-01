import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { PipesComponent } from './pipes/pipes.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { FormsComponent } from './forms/forms.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { LvyCompilerComponent } from './lvy-compiler/lvy-compiler.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    DashboardComponent,
    PipesComponent,
    LazyLoadingComponent,
    FormsComponent,
    DependencyInjectionComponent,
    InterceptorComponent,
    LvyCompilerComponent,
    AuthenticationComponent,
    LifecycleComponent,
    PromisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
