import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { ContactComponent } from "./components/contact/contact.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { Analytics } from "@vercel/analytics/next"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private readonly translate: TranslateService) {
    // Configuración inicial de idiomas
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('es');

    // Cargar idioma guardado o usar español
    const savedLang = localStorage.getItem('portfolio_language');
    const langToUse =
      savedLang && ['es', 'en'].includes(savedLang) ? savedLang : 'es';
    this.translate.use(langToUse);
  }
}
