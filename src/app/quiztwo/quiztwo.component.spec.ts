import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztwoComponent } from './quiztwo.component';

describe('QuiztwoComponent', () => {
  let component: QuiztwoComponent;
  let fixture: ComponentFixture<QuiztwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiztwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiztwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
