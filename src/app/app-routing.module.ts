import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { QuizFiveComponent } from './quiz-five/quiz-five.component';
import { QuizFourComponent } from './quiz-four/quiz-four.component';
import { QuizOneComponent } from './quiz-one/quiz-one.component';
import { QuizSixComponent } from './quiz-six/quiz-six.component';
import { QuizthreeComponent } from './quizthree/quizthree.component';
import { QuiztwoComponent } from './quiztwo/quiztwo.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [
  // {path:'', component:DetailsFormComponent},
  {path:'',redirectTo:'intro',pathMatch:"full"},
  {path:"introPage", component:IntroPageComponent},
  {path:"detailsPage", component:DetailsPageComponent},
  {path:"quizOne", component:QuizOneComponent},
  {path:"quizTwo", component:QuiztwoComponent},
  {path:"quizThree", component:QuizthreeComponent},
  {path:"quizFour", component:QuizFourComponent},
  {path:"quizFive", component:QuizFiveComponent},
  {path:"quizSix", component:QuizSixComponent},
  {path:"reviewPage", component:ReviewPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
