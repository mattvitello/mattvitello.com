import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  timeout: any;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();

    if(isMobile || isTablet){
      this.cycleImages();
    } else {
      this.changeImage();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  //change image on homepage
  changeImage(): void{
    let images = ['#img1', '#img2', '#img7', '#img4', '#img5', '#img6', '#img3', '#img8'];
    $(document).mousemove(function (e) {
      let item = $('.slider>div.show');
      let index = images.indexOf('#' + $(item).attr('id'));
      setTimeout(function () {
        let next = index + 1;
        if (index === images.length - 1) {
          next = 0;
        }
        $(images[index]).removeClass().addClass('hide');
        $(images[next]).removeClass().addClass('show');
      }, 100);
    });
  }

  cycleImages(): void{
    let images = ['#img1', '#img2', '#img7', '#img4', '#img5', '#img6', '#img3', '#img8'];
    let item = $('.slider>div.show');
    let index = images.indexOf('#' + $(item).attr('id'));
    this.startCycle(images, index);
  }

  startCycle(images, index): void {
    let next = index + 1;
    if (index === images.length - 1) {
      next = 0;
    }
    $(images[index]).removeClass().addClass('hide');
    $(images[next]).removeClass().addClass('show');

    let self = this;
    this.timeout = setTimeout(function(){self.startCycle(images, next)}, 130);
  }

}
