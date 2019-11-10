import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialpageComponent } from './Pages/tutorialpage/tutorialpage.component';
import { NotfoundpageComponent } from './Pages/notfoundpage/notfoundpage.component';


const routes: Routes = [
  { path: '', redirectTo:"tutorial", pathMatch: "full"},
  { path: 'tutorial/:id', component: TutorialpageComponent},
  { path: 'notfound', component: NotfoundpageComponent},
  { path: '**', redirectTo:"notfound", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
