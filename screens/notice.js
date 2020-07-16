import React,{useCallback} from 'react';
import {View, Text,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity,Linking} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from 'react-native-elements'


const Notice = ({navigation}) => {

    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
      
        return <Button title={children} titleStyle={{fontFamily:'Nunito-Bold',letterSpacing:1}} onPress={handlePress} icon={
          <Icon
            name="paperclip"
            size={25}
            color="white"
            style={{paddingRight:8}}
          />
        }/>;
      };
      
      

    return ( 
        <View style={styles.card}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{flex:1,flexDirection:'row',alignSelf:'center',paddingBottom:20}}>
          <Icon name={'calendar'} size={15} color="#808080" style={{paddingRight:2,paddingTop:3}}/>
          <Text style={{paddingRight:30,fontFamily:'Nunito-Regular',color:'#899CA4'}}>{navigation.getParam('date')}</Text>
          <Icon name={'clock-o'} size={15} color="#808080" style={{paddingRight:2,paddingTop:3}}/>
          <Text style={{fontFamily:'Nunito-Regular',color:'#899CA4'}}>{navigation.getParam('time')}</Text>
          </View>
            <Text style={styles.head}>{navigation.getParam('head')}</Text>
            <Text style={styles.text}>{navigation.getParam('text')}</Text>
        <View style={styles.viewButton}>
        <OpenURLButton url={navigation.getParam('downloadURL')}>View file</OpenURLButton>
        </View>
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      padding:15,
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      marginBottom:20
    },
    head:{
        textAlign:'left',
        // padding:20,
        // fontSize:25,
        // marginTop:10,
        // marginBottom:10,
        fontFamily:'Nunito-Bold',
        marginHorizontal: 18,
    // marginVertical: 20,
    fontSize:25,
    borderBottomWidth:0.5,
    paddingBottom:30

    },
    text:{
        fontFamily:'Nunito-Regular',
        marginHorizontal: 18,
        paddingTop:30,
        fontSize:20
    },
    viewButton:{
        padding:50,
        paddingBottom:20,
    }

})
 
export default Notice;