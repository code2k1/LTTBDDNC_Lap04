import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function FlashListItem(props) {
  return (
    <View style={{flexDirection:'row', alignItems:'center', padding:10,flex:1}}>
        <Image style={{width:100, height:100,resizeMode:'contain'}} source={{uri:props.photo}}/>
        <View style={{width:'50%'}}>
        <Text style={{fontSize:16,height:30}} numberOfLines={1}>{props.name_product}</Text>
        <Text style={{fontSize:16,color:"rgba(0,0,0,0.7)"}}>Shop <Text style={{color:"red"}}>{props.name_shop}</Text ></Text>
        </View>
        <Pressable style={{backgroundColor:"red", width:90, height:50, justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:"white",fontSize:20}}>Chat</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
