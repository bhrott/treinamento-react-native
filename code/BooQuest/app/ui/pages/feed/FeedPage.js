import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { 
    Text,
    TabBarIcon
} from 'boo-ui/components'

export default class FeedPage extends React.Component {
    static navigationOptions = {
        title: 'feed',
        header: null,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
            <TabBarIcon
                source={require('./img/tab-icon.png')}
                tintColor={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    FEED PAGE
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})