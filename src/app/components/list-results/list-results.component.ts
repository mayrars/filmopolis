import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-results',
  standalone: true,
  imports: [NgClass],
  templateUrl: './list-results.component.html',
  styleUrl: './list-results.component.css'
})
export class ListResultsComponent{
  @Input() results:any= [];
  @Input() hidden:boolean= true;
}
