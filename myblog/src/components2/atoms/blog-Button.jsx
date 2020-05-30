import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function BlogButton(props){
    let varient = "contained";
    const classes = useStyles();
    if(!props.varient)
        varient = props.varient;

    return(
        <>
            <Button 
                variant={varient}
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            />
        </>
    );

}