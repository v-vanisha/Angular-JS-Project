import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'data-table', component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
