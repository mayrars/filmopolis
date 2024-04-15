import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Show } from '../../models/tvshows.model';
import { Person } from '../../models/person.model';
import { ApiService } from '../../services/api.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tvshow.component.html',
  styleUrl: './tvshow.component.css'
})
export class TvshowComponent implements OnInit {
  private _tvshowsService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  private _routerEvent = inject(Router);
  urlImg: string = environment.imgUrl
  show?:Show
  actors?:Person[]
  images:any=[]
  ngOnInit(): void {    
    this._router.params.subscribe(params => {
      const id = params['id'];
      this._tvshowsService.getShow(id).subscribe((data:Show) => {
        this.show = data;
      })
      this._tvshowsService.getTvCredits(id).subscribe((data:any) => {
        this.actors = data.cast.slice(0,8);
      })
      this._tvshowsService.getTvImages(id).subscribe((data:any) => {
        this.images = data.backdrops.slice(0,20);
      })
    })
    this._routerEvent.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        initFlowbite();
      }
    });
  }
}
