import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsLikesComponent } from './comments-likes.component';

describe('CommentsLikesComponent', () => {
  let component: CommentsLikesComponent;
  let fixture: ComponentFixture<CommentsLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
