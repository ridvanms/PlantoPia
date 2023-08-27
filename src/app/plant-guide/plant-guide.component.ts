import { Component, OnInit } from '@angular/core';
import { PlantGuideService } from './plant-guide.service';

@Component({
  selector: 'app-plant-guide',
  templateUrl: './plant-guide.component.html',
  styleUrls: ['./plant-guide.component.css']
})
export class PlantGuideComponent  implements OnInit{
  plants:any=[]

  constructor(
    private plantService:PlantGuideService
  ){}
    ngOnInit(): void {
      let image:any;
        
        this.plantService.getPlantGuides().subscribe({
          next:(response)=>{
            this.plants = response.map((v:any) => {
              console.log(v.species_id)
              this.plantService.getPlantDetail(v.species_id).subscribe({
                next:(res:any)=>{
                    image = res['default_image']['original_url']
                },
                error:(err)=>{return alert(`${err.message}`)}
              })
              const newObj = {
                ...v,
                image: image
              }
              return newObj
            })
          },
          error:(error)=>console.error(`Error ${error.message}`)
        })
    }
    


}
