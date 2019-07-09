import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page/:id', component: PageDetailComponent },
  { path: 'pages', component: PageListComponent, data: { title: 'Page' }},
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
