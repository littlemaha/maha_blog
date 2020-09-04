import {request} from "./request.js";

export function getTheBlog(){//获取blog
  return request({
    url:'/get_the_blog',
   
  })
}

// export function Logins(number , password){//登录
//   return request({
//     url:'/servlet/login',
//     params:{
//       number,
//       password
//     }
//   })
// }