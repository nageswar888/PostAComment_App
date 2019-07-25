import models from '../../../models';
import Promise from 'bluebird';

export class usersDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Users.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static createNew(_body) {
    console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
      models.Users.create({
        firstName:_body.firstName,
        lastName: _body.lastName,
        phone: _body.phone,
        email: _body.email,
        password: _body.password
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
  }

  static delete(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.Users.destroy({where: {id: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getByEmail(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.Users.findAndCountAll({where: {email: paramet}})
        .then(users => {
          if(users.count == 0){
            users.rows = "0"
            resolve(users)
          }
          else
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
