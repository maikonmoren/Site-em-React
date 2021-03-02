import React from 'react'
import './contato.css'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './mainHome.css'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 201,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function Contact (){
    const classes = useStyles();
    const [uso, setUso] = React.useState('');
  
    const handleChange = (event) => {
      setUso(event.target.value);
    };
  

     return(
     <div id='contato' className='contato'>
    <br></br>
     <form>
      <br></br>
      <h1>Contato</h1>
      <div className='input-group'>
      <TextField id="standard-basic" label="Seu Nome" required/>
      </div>
      <div id='sobrenome'>
      <TextField id="standard-basic" label="Sobre Nome" required/>
      </div>
      <div className='input-group'>
      <TextField id="standard-basic" label="Telefone" pattern="^\([1-9]{2}\)[0-9]{4}\-[0-9]{4}$"  required/>
      </div>
      <div id='select'>
      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">Uso</InputLabel>
        <Select
          id='uso'
          labelId="demo-simple-select-label"
          value={uso}
          onChange={handleChange}
          required
          
        >
          <MenuItem value={1}>Pessoal</MenuItem>
          <MenuItem value={2}>Empresarial</MenuItem>

        </Select>
      </FormControl>
      </div>
      <div className='input-group'>
      <TextField fullWidth id="standard-basic" label="Email" type='email' required/>
      </div>
     <br></br>
      <div className='input-group'>
      <TextField
          id="outlined-multiline-static"
          label="Sua mensagem"
          multiline
          rows={10}
          defaultValue=""
          variant="outlined"
          fullWidth
          required
      />
      <Button variant="contained" type='submit' color="primary">
        Enviar
       </Button>
      </div>
      
      
        </form>
        <br></br>

     
     </div>);
    }
