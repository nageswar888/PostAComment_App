import models from '../../../models';
import Promise from 'bluebird';

export class commentDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Comment.findAndCountAll()
        .then(comment => {
          resolve(comment);
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
      models.Comment.create({
        postId: _body.postId,
        commentedBy: _body.commentedBy,
        text: _body.text,
      }).then(comment => {
        resolve(comment);
      })
        .catch(error => reject(error));
    });
  }

  static getById(params) {
    return new Promise((resolve, reject) => {
      models.Comment.findAll({where: {postId: params}})
        .then(comment => {
          resolve(comment);
        })
        .catch(error => {
          reject(error);
        });
    });
  }


  static deleteById(params) {
    return new Promise((resolve, reject) => {
      models.Comment.destroy({where: {postId: params}})
        .then(comment => {
          resolve(comment);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
