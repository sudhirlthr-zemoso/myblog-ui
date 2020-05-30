import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function HeaderTag(props) {
  const creationdate = props.creationdate;
  const refuser = props.refuser;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h11">{creationdate}, {refuser}</Typography>
      </ThemeProvider>
    </div>
  );
}