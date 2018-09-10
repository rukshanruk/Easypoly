import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Save1Page } from '../save1/save1';
import { Save2Page } from '../save2/save2';
import { Save3Page } from '../save3/save3';
import { Poly1Page } from '../poly1/poly1';
import { Poly2Page } from '../poly2/poly2';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  save1Page = Save1Page;
  save2Page = Save2Page;
  save3Page = Save3Page;
  poly1Page = Poly1Page;
  poly2Page = Poly2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
