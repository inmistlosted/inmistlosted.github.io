import { Component } from '@angular/core';
import { Education } from 'src/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public educationEntries: Array<Education> = [
    { 
      title: "Bachelor of Software Engineering", 
      place: "Taras Shevchenko National University",
      city: "Kyiv",
      country: "Ukraine",
      description: "I graduated from my bachelor's degree with excellent grades. I started off with Java and gained a thorough understanding of algorithms. I also completed a minor in web and game development (multimedia).",
      startDate: new Date(2017, 9, 1),
      endDate: new Date(2021, 6, 30) 
    }
  ];
}
