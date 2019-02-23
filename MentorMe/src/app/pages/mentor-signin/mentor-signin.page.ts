import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mentor-signin',
  templateUrl: './mentor-signin.page.html',
  styleUrls: ['./mentor-signin.page.scss'],
})
export class MentorSigninPage {

  constructor(private toast: ToastController) { }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'ADDED TO THE DATABASE Y\'ALL.',
      duration: 2000
    });
    toast.present();
  }

}
