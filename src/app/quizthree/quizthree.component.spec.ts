import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizthreeComponent } from './quizthree.component';

describe('QuizthreeComponent', () => {
  let component: QuizthreeComponent;
  let fixture: ComponentFixture<QuizthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
