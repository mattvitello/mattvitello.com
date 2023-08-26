import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    $(window).on( 'scroll', function(){
     var scrollPosition = parseInt($(window).scrollTop());
     if ($(document).width() > 768){
       if(scrollPosition == 0){
        $(".top-nav").removeClass("fade-up");
      }
      else{
        $(".top-nav").addClass("fade-up");
      }
    }
    });
  }
}
