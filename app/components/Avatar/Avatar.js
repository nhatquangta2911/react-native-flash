import React from 'react';
import { View } from 'react-native';
import { Avatar as AvatarFrame, Badge } from 'react-native-elements';

const Avatar = ({
  uri = 'https://image2.tin247.com/pictures/2018/12/06/cul1544098477.jpg',
  isOnline = true
}) => (
  <View>
    <AvatarFrame
      rounded
      //   showEditButton
      source={{
        uri
      }}
      size="medium"
    />
    {isOnline && (
      <Badge
        status="success"
        containerStyle={{ position: 'absolute', top: 5, right: 1 }}
        badgeStyle={{ height: 10, width: 10 }}
      />
    )}
  </View>
);

export default Avatar;
