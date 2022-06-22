/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Image,
  Modal
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const questionList = [
    {description: 'Understand what patterns drive your anxiety'},
    {description: 'Learn validated tools to change those patterns'},
    {description: 'Practice reducing anxiety in a safe space'}
  ];

  return (
    <>
    <LinearGradient  colors={['#F9E3C5','#fff','#F4F0E3' ]} 
    start={{
      x: 1,
      y: 0
    }}
    end={{
      x: 0,
      y: 1
    }}
    style={{flex:1,paddingVertical:70}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <Section title="To reach this goal, we will:">
            <View style={{flexDirection: 'column'}}>
              {questionList.map((question,index) => {
                return (
                  <View style={{flexDirection: 'row',marginVertical:8}}>
                    <View style={{backgroundColor:'#5E6180', width:20, height:20,justifyContent:'center',borderRadius:20}}>
                    <Text style={{color:"#fff",textAlign: 'center'}}>{index+1}</Text>
                    </View>
                    <Text style={{marginHorizontal:10}}>{question.description}</Text>
                  </View>
                
                );
              })}
           </View>
          </Section>
          <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
            <View style={{flexDirection:'row'}}>
            <Image source={require("./icon.png")} style={{width:20,height:20,marginRight:20}}/>
            <Text style={styles.text}>{'What will i learn?'}</Text>
            </View>
          </Pressable>

      </ScrollView>
    </LinearGradient>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#EDECEC',paddingBottom:10}}>
              <View style={{flex:10,alignItems:'center'}}>
                <Image source={require("./icon.png")} style={{width:20,height:20,marginRight:20}}/>
              </View>
              <View style={{flex:2,alignItems:'flex-end'}}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Image source={require("./Close.png")} style={{width:20,height:20,marginRight:20}}/>
                </Pressable>
              </View>

            </View>
            <View style={{justifyContent:'center',flex:1,alignItems:'center',backgroundColor:'#e8e7e7'}}>
              <Image source={require("./imageTest.png")} style={{width:40,height:40,marginRight:20,backgroundColor:'#e8e7e7'}}/>
            </View>
          </View>
        </View>
      </Modal> 
  </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 40,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
    backgroundColor: '#FFFFFF',
    color: 'black'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(245, 240, 236, 0.6)',
    paddingVertical: 30,
    paddingHorizontal: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex:1,
    width:'90%'
  },
});

export default App;
