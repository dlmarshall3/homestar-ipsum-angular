import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneratorComponent } from './generator/generator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphsComponent,
    BodyComponent,
    HeaderComponent,
    GeneratorComponent,
    NotFoundComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
