import {usersController} from '../controllers/users-controller';

export class userRoutes {
  static init(router) {
    router.route('/user')
      .get(usersController.getAll)
      .post(usersController.createNew);

    router.route('/user/:id')
    .delete(usersController.delete)
      .get(usersController.getByEmail)

  }
  }
