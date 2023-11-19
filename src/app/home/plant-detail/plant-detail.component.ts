import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit{
  data: PlantData | undefined
  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       const id = params['id'];
      if (!id) {
        this.router.navigate(['/']);
        return;
      }
      // Get the plant by ID  
      this.apiService.getPlantDetail(id).subscribe(data => {
        this.data = data as PlantData
        // console.log(data);
      })
      })
  }
}
export interface PlantData {
   "id": 1,
      "common_name": string,
      "scientific_name": [],
      "other_name": [],
      "family": string,
      "origin": null,
      "type": string,
      "dimensions": {
          "type": null,
          "min_value": number,
          "max_value": number,
          "unit": string
      },
      "cycle": string,
      "watering": string,
      "depth_water_requirement": {
          "unit": string,
          "value": string
      },
      "volume_water_requirement": {
          "unit": string,
          "value": string
      },
      "watering_period": "morning",
      "watering_general_benchmark": {
          "value": number,
          "unit": string
      },
      "plant_anatomy": [],
      "sunlight": [
          "Part shade"
      ],
      "pruning_month": [
          "March",
          "April"
      ],
      "pruning_count": {
          "amount": number,
          "interval": string
      },
      "seeds": number,
      "attracts":[],
      "propagation":[],
      "hardiness": {
          "min": string,
          "max": string
      },
      "hardiness_location": {
        "full_url": string,
        "full_iframe": string
      },
      "flowers": boolean,
      "flowering_season": string,
      "color": string,
      "soil": [],
      "pest_susceptibility": null,
      "cones": boolean,
      "fruits": boolean,
      "edible_fruit": boolean,
      "fruit_color": null,
      "fruiting_season": null,
      "harvest_season": null,
      "harvest_method": string,
      "leaf": boolean,
      "leaf_color": [
          "green"
      ],
      "edible_leaf": boolean,
      "growth_rate": string,
      "maintenance": string,
      "medicinal": boolean,
      "poisonous_to_humans": boolean,
      "poisonous_to_pets": boolean,
      "drought_tolerant": boolean,
      "salt_tolerant": boolean,
      "thorny": boolean,
      "invasive": boolean,
      "rare": boolean,
      "rare_level": string,
      "tropical": boolean,
      "cuisine": boolean,
      "indoor": boolean,
      "care_level": string,
      "description": string,
      "default_image": {
        "image_id": number,
        "license": number,
        "license_name": string,
        "license_url": string,
        "original_url": string,
        "regular_url": string,
        "medium_url": string,
        "small_url": string,
        "thumbnail": string
      }
}
