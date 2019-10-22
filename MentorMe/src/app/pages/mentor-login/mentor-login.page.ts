import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.page.html',
  styleUrls: ['./mentor-login.page.scss'],
})
export class MentorLoginPage {

  constructor(private router: Router)  { }
navToHome(){
  this.router.navigate(['/home']);
}
}
