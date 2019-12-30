import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Lista extends React.Component {
     render() {
          return (
               <div>
                    <TextField
                         id="outlined-with-placeholder"
                         label="With placeholder"
                         placeholder="Placeholder"
                         margin="normal"
                         variant="outlined"
                    />
               </div>
          );
     }
}