import { environment } from './../../../environments/environment';
export const POST = 'POST';
export const COMMENT = 'COMMENT';
export const LIKE = 'LIKE';
export const COMMENTPOST = 'COMMENTPOST';
export const LIKEPOST = 'LIKEPOST';
export const POSTSPOST = 'POSTSPOST';
export const POSTBYID = 'POSTBYID';
export const POSTUSER = 'POSTUSER';
export const USERBYEMAIL = 'USERBYEMAIL';
//export const POSTBYSEARCH = 'POSTBYSEARCH'

export const UserEndPoint = (type:string,params:any)=> {

  switch (type) {

    case POST:
      let ActionPro = environment.API_ROOT + 'post';
      return ActionPro;

    case POSTBYID:
      return environment.API_ROOT + 'post/' + params;


    case COMMENT:
      return environment.API_ROOT + 'comment/' + params;

    case LIKE:
      return environment.API_ROOT + 'like/' + params;

    case COMMENTPOST:
      return environment.API_ROOT + 'comment/'

    case LIKEPOST:
      return environment.API_ROOT + 'like/'

    case POSTSPOST:
      return environment.API_ROOT + 'post/'

    case POSTUSER:
      return environment.API_ROOT + 'user/'

    case USERBYEMAIL:
      return environment.API_ROOT + 'user/'+ params



  }
}




