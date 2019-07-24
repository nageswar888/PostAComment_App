import {commentController} from '../controllers/comment-controller';

export class commentRoutes {
  static init(router) {
    router.route('/comment')
      .get(commentController.getAll)
      .post(commentController.createNew);

    router.route('/comment/:id')
      .get(commentController.getById)
      .delete(commentController.deleteById)

  }
}
