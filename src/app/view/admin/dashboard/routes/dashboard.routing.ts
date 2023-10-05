import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { CommandComponent } from "../command/command.component";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { ProductComponent } from "../product/product.component";
import { HistoryComponent } from "../history/history.component";
import { ParametreComponent } from "../parametre/parametre.component";
import { CategorieComponent } from "../categorie/categorie.component";
import { DetailComponent } from "../detail/detail.component";
import { ReportingComponent } from "../reporting/reporting.component";
import { AccessGuard } from "src/app/guards/adminGuards/access.guard";
import { UsersComponent } from "../users/users.component";
import { StaffRoleGuard } from "src/app/guards/adminGuards/staffRole.guard";

const routes  : Routes = [
  {
    path :'',
    component : AdminLayoutComponent,
    children : [
      {
        path : 'home',
        component : IndexComponent,
        canActivate : [AccessGuard,StaffRoleGuard]
      },
      {
        path : 'users',
        component : UsersComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'commandes',
        component : CommandComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'products',
        component : ProductComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'categorie',
        component : CategorieComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'history',
        component : HistoryComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'detail/command/:guid',
        component : DetailComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'parametre',
        component :  ParametreComponent,
        canActivate : [AccessGuard]
      },
      {
        path : 'reporting',
        component :  ReportingComponent,
        canActivate : [AccessGuard]
      },
      {
        path : '',
        pathMatch:'full',
        redirectTo : 'home'
      },


    ]
  }

]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class DashboardRouting {

}
