import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
