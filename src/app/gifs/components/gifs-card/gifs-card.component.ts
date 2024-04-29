import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gifs!: Gifs;

  ngOnInit(): void {
    if ( !this.gifs ) throw new Error('Gifs property is require');
  };

}
