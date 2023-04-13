import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutmeComponent } from 'src/components/aboutme/aboutme.component';
import { CareerComponent } from 'src/components/career/career.component';
import { EducationComponent } from 'src/components/education/education.component';
import { LinksComponent } from 'src/components/links/links.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { TitleComponent } from 'src/components/title/title.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutmeComponent,
    EducationComponent,
    CareerComponent,
    SkillsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
