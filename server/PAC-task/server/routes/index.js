import {postRoutes} from "../api/post/routes/post-routes";
import {commentRoutes} from "../api/comment/routes/comment-routes";
import {likeRoutes} from "../api/like/routes/like-routes";
import {userRoutes} from "../api/Users/routes/users-routes";

export default class Routes {
   static init(app, router) {
     postRoutes.init(router),
     commentRoutes.init(router),
     likeRoutes.init(router),
     userRoutes.init(router);

     app.use("/", router);
     console.log("hello")
   }
}
