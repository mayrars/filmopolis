import { Component, inject, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Show } from '../../models/tvshows.model';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tvshow.component.html',
  styleUrl: './tvshow.component.css'
})
export class TvshowComponent implements OnInit {
  private _tvshowsService = inject(TvshowsService);
  private _router = inject(ActivatedRoute);
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
      this._tvshowsService.getCredits(id).subscribe((data:any) => {
        this.actors = data.cast.slice(0,8);
      })
      this._tvshowsService.getImages(id).subscribe((data:any) => {
        this.images = data.backdrops.slice(0,20);
      })
    })
  }
}
