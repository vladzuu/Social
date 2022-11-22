import { Switch, Typography } from '@mui/material';
import React from 'react';
import './setting.scss'

interface SettingProps {
  prop: string;
}

const Setting = (props: SettingProps) => {

  const { prop } = props;
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='setting-div'>
      <Typography variant="h5" gutterBottom>
        {checked ? 'ON dark mode' : 'OFF dark mode'}
      </Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {checked.toString()}
    </div>
  );
};

export default Setting;
