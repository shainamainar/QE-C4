import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mentor', loadChildren: './pages/mentor/mentor.module#MentorPageModule' },
  { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule' },  { path: 'mentor-signin', loadChildren: './pages/mentor-signin/mentor-signin.module#MentorSigninPageModule' },
  { path: 'student-signin', loadChildren: './pages/student-signin/student-signin.module#StudentSigninPageModule' },
  { path: 'student-login', loadChildren: './pages/student-login/student-login.module#StudentLoginPageModule' },
  { path: 'mentor-login', loadChildren: './pages/mentor-login/mentor-login.module#MentorLoginPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
