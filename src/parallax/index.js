//import {computedFrom} from 'aurelia-framework';
// import materialize from 'materialize-css';
import { autoinject } from "aurelia-framework";
import { MdToastService, MdModal } from "aurelia-materialize-bridge";
import {  AppRouter} from 'aurelia-router';
import {  inject,  bindable} from 'aurelia-framework';
@inject(MdToastService, AppRouter)//,  AuthServiceGTZ, ApiService)

export class Parallax {
  heading = 'Welcome to Parallax!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;
  constructor(toast, router) {
    this.selectedIdx = 0;
    this.googledrive = 'https://drive.google.com/file/d/0B5VqS5BVcBg2UkpXd2p0eFFFUVk/preview?usp=sharing';
    this.Video = 0;
    this.imageindex = 0;
    let menus = []
    this.cats = []
    this.catsidx = []
    this.category = 0
    // 3/28/2019 new param mongodid
    this.monggoid = '-1'
    //this.api = api
    // this.modal = MdModal;
  
    this.modalThumbs = MdModal;
    this.toast = toast
    this.selectedmenu = 'paintings'
  }
  activate() {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }
}
