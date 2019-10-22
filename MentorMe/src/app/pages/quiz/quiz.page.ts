import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(private router: Router, private toast: ToastController) {
  }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'ADDED TO THE DATABASE Y\'ALL.',
      duration: 2000
    });
    toast.present();
  }

  navToHome() {
    this.router.navigate(['/home']);
  }
}
