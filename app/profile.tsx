'use dom';

import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '@/components/ui/button';
import '../global.css';
const Profile = () => {
  return (
    <div>
      <h1 className="color-red-500">Profiles</h1>
      <Button variant="destructive">Button</Button>
    </div>
  );
};

export default Profile;
