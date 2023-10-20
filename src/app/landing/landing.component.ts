import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  check:any=false
  mdata:any
  search=this.fb.group({
    film:['']
  })

  constructor(private ps:ServiceService,private fb:FormBuilder,private router:Router) {

  }
  ngOnInit():void
{
  this.check=false
}
moviesearch()
{
var film=this.search.value.film
console.log(film);


this.ps.search(film).subscribe(data=>{
  this.mdata=data
  this.check=true
})
}

}
