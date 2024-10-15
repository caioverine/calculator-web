import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationFormComponent } from './operation-form/operation-form.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
		path: 'operations',
		component: OperationFormComponent,
		data: { breadcrumb: 'Operation' },
		canActivate: [AuthGuard]
	},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'operations'
  },
  {
    path: '**', redirectTo: 'operations'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
