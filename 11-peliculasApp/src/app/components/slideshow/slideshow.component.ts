import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public swiper: Swiper;

  constructor() { }
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,    
    });
  }

  ngOnInit(): void {}

  onSlidePrev() {
    this.swiper.slidePrev();
  }

  onSlideNext() {
    this.swiper.slideNext();
  }

  

}
