import React from 'react';
import { Text } from 'react-native'

import styles from './styles'
/* Heading component */

function AppText({children}) {
    return (
        <Text style = {styles.text}>{children}</Text>
    );
}

//Platform.select return an object. so we will copy that with our other params



export default AppText;