import { Component } from '@angular/core';
import { Career } from 'src/models/career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  public careerEntries: Array<Career> = [
    { 
      title: "Full Stack Software Developer", 
      company: "Evinent GmbH",
      country: "Germany",
      description: "As a Full-Stack Developer at Evinent GmbH, I work on a variety of projects all within the healthcare, education, and innovation sectors. With my past experiences I'm committed of helping the company achieve an even greater success. Not only with development, but also by improving the way we're working.",
      startDate: new Date(2020, 8, 1),
      tasks: [
        "Wrote clean and dynamic code, leveraging expertise across multiple programming languages to meet diverse requirements.",
        "Completed assigned tasks and reached targets working solely in remote working capacity.",
        "Coded backend services using .NET Framework.",
        "Used Blazor, React and Angular in frontend development.",
        "Built highly optimized SQL queries to improve datastorage interactions.",
        "Developed high performance application using Microsoft Azure Cloud Services.",
        "Implemented Unit Tests and Integration Tests, minimising labour hours and maximising team performance.",
        "Leveraged Microsoft Azure DevOps project management software to manage product backlog and workflow.",
        "Provided complete technical documentation, code comments and readable code, properly storing in central documentation library.",
        "Troubleshot and debugged software to identify and rectify errors, minimising work disruptions and down time."
      ]
    }
  ];
}
