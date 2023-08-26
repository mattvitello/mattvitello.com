import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-whatisthis',
  templateUrl: './whatisthis.component.html',
  styleUrls: ['./whatisthis.component.css']
})
export class WhatisthisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (typeof window["Hydra"] !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("geometry-script-re-loaded")
      );
    } else {
      get("./assets/js/geometry.js", () => {});
    }
  }
}
