import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  // Obtenemos la referencia del elemento scroll
  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() {
    console.log(this.personas);
  }

  ngOnInit() {
  }

  irFinal(){
    this.viewport.scrollToIndex( this.personas.length );
  }

  irInicio(){
    this.viewport.scrollToIndex( 0 );
  }

  irMedio(){
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }


}
