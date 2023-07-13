/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.textHeader}>henk</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image source={{uri: 'https://static.tildacdn.com/tild3638-3632-4537-a530-663537333265/BalmainHair_LimitedE.jpg'}} style={styles.photoHorizontalScroll}/>
        <Image source={{uri: 'https://static.tildacdn.com/tild6339-3936-4232-b932-336663366565/BalmainHair_Web_Bann.jpg'}} style={styles.photoHorizontalScroll}/>
        <Image source={{uri: 'https://static.tildacdn.com/tild3238-3166-4766-a538-636334633237/BalmainHair_LimitedE.jpg'}} style={styles.photoHorizontalScroll}/>
      </ScrollView>

      <ScrollView >
          <View style={styles.body}>
            <Text style={styles.textBody}>Топ пропозиції</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
            <View>
              <Image source={{uri: 'https://www.sephora.com/productimages/sku/s2537900-main-zoom.jpg'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Шампунь</Text>
              <Text style={{textAlign: 'center'}}>30$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Шампунь')}/>
            </View>
            <View>
              <Image source={{uri: 'https://static.insalescdn.com/images/products/1/2985/401157033/Gel_dlya_dusha_Barbers_SACRAMENTO_500_ml.jpg'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Гель</Text>
              <Text style={{textAlign: 'center'}}>40$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Гель')}/>
            </View>
            <View>
              <Image source={{uri: 'https://elemis.com.ua/image/cache/catalog/teloexotics/lime-_-ginger-salt-glow_490_rgb_web-1000x1000.jpg'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Скраб</Text>
              <Text style={{textAlign: 'center'}}>25$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Скраб')}/>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.textBody}>Товари</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
            <View>
              <Image source={{uri: 'https://www.inro.com.ua/wp-content/uploads/2020/12/crofton-soap1.jpg'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Мило</Text>
              <Text style={{textAlign: 'center'}}>20$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Мило')}/>
            </View>
            <View>
              <Image source={{uri: 'https://beautybutterfly.com.ua/content/images/22/1280x1280l80mc0/50145250721860.webp'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Віск</Text>
              <Text style={{textAlign: 'center'}}>30$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Віск')}/>
            </View>
            <View>
              <Image source={{uri: 'https://balmainhair.com.ua/cdn/shop/products/balmainhair_styling_sessionspraystrong_800x800_df055fb3-ec66-44f7-8166-029ef9af5f64.jpg?v=1677213771'}} style={styles.topItemPhoto}/>
              <Text style={{textAlign: 'center'}}>Лак</Text>
              <Text style={{textAlign: 'center'}}>24$</Text>
              <Button title="Buy" onPress={() => Alert.alert('Ви замовили Лак')}/>
            </View>
          </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15
  },
  textHeader: {
    fontSize: 25,
  },
  photoHorizontalScroll: {
    width: 400,
    height: 180,
  },
  body: {
    margin: 10,
  },
  textBody: {
    fontSize: 18,
  },
  topItemPhoto: {
    width: 80,
    height: 80,
  }
});

export default App;
