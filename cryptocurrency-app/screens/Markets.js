import React, {Component,useRef, useMemo, useState,useEffect} from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View,Image } from 'react-native';
import ListItem from '../components/ListItem';
import ListeDeneme from '../components/ListeDeneme';

import {SAMPLE_DATA} from '../assets/data/sampleData';
import { getMarketData } from '../services/cryptoService';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
    <View style={styles.divider} />
  </>
)

const Markets = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }

    fetchMarketData();
  }, [])

  const renderItem= ({item}) => (
    <ListItem 
    name={item.name} 
    symbol={item.symbol}
    currentPrice={item.current_price}
    priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
    logoUrl={item.image}     
    />    
  );

  return (
    <SafeAreaView style={styles.container}>                          
        <FlatList
        keyExtractor={(item)=>item.id}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader/>}
        />
               
    </SafeAreaView>                       
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});




export default Markets;