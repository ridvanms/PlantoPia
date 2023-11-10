import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';
import { PlantDetailComponent } from './home/plant-detail/plant-detail.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path: 'detail',
    component:PlantDetailComponent
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
