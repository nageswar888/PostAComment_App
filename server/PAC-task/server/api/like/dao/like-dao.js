import models from '../../../models';
import Promise from 'bluebird';

export class likeDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Likes.findAndCountAll()
        .then(like => {
          resolve(like);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /* static getAll() {
    return new Promise((resolve, reject) =>{
      models.Post.findAll({include:{ model: models.likes}})
        .then(branch => { resolve(branch); })
        .catch(error =>{ reject(error)})
    })
  }*/

  static createNew(_body) {
    return new Promise((resolve, reject) => {
      models.Likes.create({
        postId: _body.postId,
      }).then(like => {
        resolve(like);
      })
        .catch(error => reject(error));
    });
  }

  static getById(paramet) {
    return new Promise((resolve, reject) => {
      models.Likes.findAll({where:{postId: paramet}})
        .then(like => {
          resolve(like);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static delete(paramet) {
    return new Promise((resolve, reject) => {
      models.Likes.destroy({where:{postId: paramet}})
        .then(like => {
          resolve(like);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static update(body,paramet) {
    return new Promise((resolve, reject) => {
      models.Likes.update({
        postId: body.postId
      },{where:{id: paramet}})
        .then(like => {
          resolve(like);
          //console.log("88",like)
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
