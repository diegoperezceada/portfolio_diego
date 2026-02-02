import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      id: 'ecomarket',
      image: 'assets/img/project-ecomarket.webp', // Placeholder or use a generic one if not available
      tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      repoLink: '#'
    },
    {
      id: 'taskflow',
      image: 'assets/img/project-taskflow.webp',
      tech: ['Angular', 'Firebase', 'Tailwind', 'RxJS'],
      demoLink: '#',
      repoLink: '#'
    },
    {
      id: 'clouddash',
      image: 'assets/img/project-clouddash.webp',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'Chart.js'],
      demoLink: '#',
      repoLink: '#'
    }
  ];
}
