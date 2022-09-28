import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlashListItem from './component/FlashListItem';
import FlashListData from './FlashListData';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center',padding:10,flexDirection:'row', width:'100%', height:50, backgroundColor:"#1BA9FF", justifyContent:'space-between'}}>
        <Image source={require('./icon/back.png')}/>
        <Text style={{fontSize:18,color:"white"}}>Chat</Text>
        <Image source={require('./icon/store.png')}/>
        </View>
        <Text style={{fontWeight:'500',fontSize:16,color:"black",paddingLeft:20, paddingRight:20}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        
        <FlatList
          style={{height:'60%'}}
          data={FlashListData}
          renderItem={({item})=> <FlashListItem {...item}/>}
          keyExtractor={(item) => item.id}
          />
        <View style={{width:'100%',flexDirection:'row',backgroundColor:"#1BA9FF",height:50, justifyContent:'space-around', alignItems:'center', }}>
          <View style={{flexDirection:"column", height:30, justifyContent:'space-between'}}>
          <Image source={require('./icon/line.png')} style={{width:40}}/>
          <Image source={require('./icon/line.png')} style={{width:40}}/>
          <Image source={require('./icon/line.png')} style={{width:40}}/>
          </View>
          <Image source={require('./icon/back2.png')} style={{width:40,height:40}}/>
          <Image source={require('./icon/home.png')} style={{width:40,height:40}}/>
        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
