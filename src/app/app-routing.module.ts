import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

const routes: Routes = [
  {path: 'products',component: ProductListComponent},
  {path: 'operas',component: OperasBasComponent},
  {path: 'cinepolis',component: CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
