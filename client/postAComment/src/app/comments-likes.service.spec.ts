import { TestBed, inject } from '@angular/core/testing';

import { CommentsLikesService } from './comments-likes.service';

describe('CommentsLikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsLikesService]
    });
  });

  it('should be created', inject([CommentsLikesService], (service: CommentsLikesService) => {
    expect(service).toBeTruthy();
  }));
});
