import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponentFirstComponent} from "./app-component-first/app-component-first.component";
import {AppComponentSecondComponent} from "./app-component-second/app-component-second.component";
import {DemoComponent} from "./demo/demo.component";
import {IntroComponent} from './intro/intro.component';

const routes: Routes = [
  {path: '1', component: AppComponentFirstComponent},
  {path: '2', component: AppComponentSecondComponent},
  {path: '2/:id', component: AppComponentSecondComponent},
  {path: 'demo', component: DemoComponent},
  {path: '', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

