import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-results',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './list-results.component.html',
  styleUrl: './list-results.component.css'
})
export class ListResultsComponent{
  @Input() results:any= [];
  @Input() hidden:boolean= true;
  @Output() OnClick: EventEmitter<boolean> = new EventEmitter();
  urlImg: string = environment.imgUrl
  close(){
    this.hidden = true;
  }
}
