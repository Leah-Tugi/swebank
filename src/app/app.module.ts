import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { QuizOneComponent } from './quiz-one/quiz-one.component';
import { QuiztwoComponent } from './quiztwo/quiztwo.component';
import { QuizthreeComponent } from './quizthree/quizthree.component';
import { QuizFourComponent } from './quiz-four/quiz-four.component';
import { QuizFiveComponent } from './quiz-five/quiz-five.component';
import { QuizSixComponent } from './quiz-six/quiz-six.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    IntroPageComponent,
    DetailsPageComponent,
    HeaderComponent,
    TopBarComponent,
    ReviewPageComponent,
    QuizOneComponent,
    QuiztwoComponent,
    QuizthreeComponent,
    QuizFourComponent,
    QuizFiveComponent,
    QuizSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
