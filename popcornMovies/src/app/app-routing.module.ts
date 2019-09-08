import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,NgZorroAntdModule]
})
export class AppRoutingModule { }
