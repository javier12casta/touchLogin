import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCTRL: NavController, private faio: FingerprintAIO) { }
  login(){
    this.faio.show({
      clientId: 'Fingerprint',
      clientSecret: 'password',
    })
    .then(result =>{
      this.navCTRL.navigateRoot('home');
    })
    .catch(err => {
      console.log('Err:', err);
    });
  }
  
  ngOnInit() {
  }

}
