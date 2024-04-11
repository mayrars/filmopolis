import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Person } from '../../models/person.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit{
  private _apiService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  urlImg: string = environment.imgUrl
  person?: Person
  socialNetwork?: any
  images:any

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      const id = params['id'];
      this._apiService.getPerson(id).subscribe((person: Person) => {
        this.person = person
        console.log(this.person)
      });
      this._apiService.getSocialNetwork(id).subscribe((socialNetwork) => {
        this.socialNetwork = socialNetwork
      })
      this._apiService.getPersonImages(id).subscribe((data) => {
        this.images = data.profiles
        console.log(this.images)
      })
    })
  }
}
