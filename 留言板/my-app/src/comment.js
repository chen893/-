import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  
}));
function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
function Comment (){
  const classes = useStyles();
  const [userName, setUserName] = React.useState('');
  const [userReply, setUserReply] = React.useState('');
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  const changeReply = (event) =>{
    // console.log(event.target.value);
    setUserReply(event.target.value)
  }
  const [messsage, setMesssage] = useState('提交成功');
  const addUser = () =>{
    const data = {answer:userReply, name: userName, type: 0}
    if(!userReply || !userName){
      setMesssage('请填写完整信息')
      setTransition(() => TransitionDown);
      setOpen(true);
      setTimeout(()=>{setOpen(false)},1500)
      
      return;
    }
    axios.post('http://121.4.183.85:3066/comment',data )
    .then((res)=>{
      setMesssage('提交成功')
      console.log(res);
      setTransition(() => TransitionDown);
      setOpen(true);
      setUserName('');
      setUserReply('');
      setTimeout(()=>{setOpen(false)},1500)
    })
  }

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className='flex flex-col '  style={{'alignItems':'center','alignItems':'center'}}>
        <TextField
          id="standard-multiline-flexible"
          label="用户名"
          multiline
          rowsMax={4}
          value={userName}
          onChange={handleChange}
          placeholder="用来查看回复"
        />
        <TextField
          id="standard-textarea"
          label="留言内容"
          placeholder="留言内容"
          multiline
          value= {userReply}
          onChange = {changeReply}
          className='mb-5'
        />
                {/* <Button
        variant="contained"
        color="primary"
        size= 'middle'

        className={classes.button}

        startIcon={<SaveIcon />}
        onClick = {addUser}
      >
        Save
      </Button> */}
      <Button variant="contained" color="primary" onClick = {addUser} size='small' className='mt-16' style={{'margin':'20px',}}>
        提交
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={messsage}
        
        key={transition ? transition.name : ''}
      />
        </div>

        </form>
  )
}

export default Comment;