export default class Users {
  /*
   * API  
   *
   */
   async getData(){
     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
     const users = await resp.json()
     console.info(users)
   }
  
  }
  