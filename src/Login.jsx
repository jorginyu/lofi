import React from 'react';

const API_REGISTER = 'http://localhost:8080/signin';
const API_LOGIN = 'http://localhost:8080/login';

export default class Login extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               online: false
          };
     }
     render() {
          return(
               <div>
                    Login
               </div>
          );
     }
}