import { Component } from '@angular/core';
import { Skill } from 'src/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public stars = new Array(5);
  public skills: Array<Skill> = [
    { 
      title: "C#", 
      rating: 5
    },
    { 
      title: "Java", 
      rating: 3
    },
    { 
      title: "HTML", 
      rating: 5
    },
    { 
      title: "XML", 
      rating: 5
    },
    { 
      title: "JavaScript", 
      rating: 5
    },
    { 
      title: "TypeScript", 
      rating: 5
    },
    { 
      title: "JQuery", 
      rating: 5
    },
    { 
      title: "CSS", 
      rating: 5
    },
    { 
      title: "SASS", 
      rating: 5
    },
    { 
      title: "SCSS", 
      rating: 5
    },
    { 
      title: "ASP.NET", 
      rating: 5
    },
    { 
      title: ".NET Framework", 
      rating: 5
    },
    { 
      title: ".NET Core", 
      rating: 5
    },
    { 
      title: "Microsoft Azure", 
      rating: 4
    },
    { 
      title: "Microsoft Graph API", 
      rating: 5
    },
    { 
      title: "Node.js", 
      rating: 4
    },
    { 
      title: "Angular", 
      rating: 3
    },
    { 
      title: "React", 
      rating: 4
    },
    { 
      title: "Blazor", 
      rating: 5
    },
    { 
      title: "Bootstrap", 
      rating: 5
    },
    { 
      title: "PostgreSQL", 
      rating: 5
    },
    { 
      title: "MySQL", 
      rating: 4
    },
    { 
      title: "SQL Server", 
      rating: 4
    },
    { 
      title: "Azure Table Storage", 
      rating: 5
    },
    { 
      title: "MongoDB", 
      rating: 3
    },
    { 
      title: "Elasticsearch", 
      rating: 3
    },
    { 
      title: "Git", 
      rating: 5
    },
    { 
      title: "Unit testing", 
      rating: 5
    },
    { 
      title: "Integration testing", 
      rating: 5
    },
    { 
      title: "Agile", 
      rating: 5
    },
    { 
      title: "Object-oriented programming", 
      rating: 5
    },
    { 
      title: "Concurrent programming", 
      rating: 5
    },
    { 
      title: "Data structures and algorithms", 
      rating: 5
    },
    { 
      title: "Operating systems", 
      rating: 4
    },
  ];
}
