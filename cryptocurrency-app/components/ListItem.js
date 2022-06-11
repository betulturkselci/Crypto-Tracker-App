import React, {Component} from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    return(
        <TouchableOpacity>
      <View style={styles.itemWrapper}>
        
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{ name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        
        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency:'USD'})}</Text>
          <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>

      </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
})


  export default ListItem