import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KEY } from 'src/config';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlantGuideService {
  plantGuideURL = `https://perenual.com/api/species-care-guide-list?key=${KEY}`
  plantDetailURL = (id:number) => {return `https://perenual.com/api/species/details/${id}?key=sk-gs5E64c24b132abcf1691`}
  constructor(
    private http:HttpClient
  ) { }
   
  getPlantDetail(id:number){
    return this.http.get(this.plantDetailURL(id))
  }

  getPlantGuides () {
    return this.http.get(this.plantGuideURL).pipe(map((response:any)=>{
      return response['data'].slice(0,3)
    }))
  }
}
