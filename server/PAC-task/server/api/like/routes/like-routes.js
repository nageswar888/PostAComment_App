import {likeController} from '../controllers/like-controller';

export class likeRoutes {
  static init(router) {
    router.route('/like')
      .get(likeController.getAll)
      .post(likeController.createNew);

    router.route('/like/:id')
      .get(likeController.getById)
      .delete(likeController.delete)
      .put(likeController.update)

  }
}


