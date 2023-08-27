import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren : () => import('./account/account.module').then((m) => m.AccountModule)
  },
  {
    path:'plantGuide',
    loadChildren : () => import("./plant-guide/plant-guide.module").then(m => m.PlantGuideModule)
  },
  //!SECTION error page down
  {
    path:"**",
    component:NotfountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
