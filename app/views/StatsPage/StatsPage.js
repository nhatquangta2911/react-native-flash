/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, Alert, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Button } from '../../components';
import styles from './styles';
import {
  headerStyle,
  dimensions,
  darkPalette,
  fonts,
  margin,
  padding
} from '../../styles/base';

export class StatsPage extends Component {
  static navigationOptions = {
    title: 'Statistic'
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    const { statsContainer, chartContainer, textStyles, titleStyles } = styles;
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [3, 11, 2, 13, 1, 4, 0],
          color: (opacity = 255) => `rgba(23, 162, 184, ${opacity})`
        }
      ]
    };

    const chartConfig = {
      backgroundColor: '#42f009',
      backgroundGradientFrom: darkPalette.white,
      backgroundGradientFromOpacity: 0.2,
      backgroundGradientTo: darkPalette.white,
      backgroundGradientOpacity: 0.8,
      decimalPlaces: 0, // optional, defaults to 2dp
      strokeWidth: 2,
      color: (opacity = 255) => `rgba(23, 162, 184, ${opacity})`
    };

    return (
      <View style={statsContainer}>
        <ScrollView>
          <View style={chartContainer}>
            <Text style={titleStyles}>Amount of Answers</Text>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [3, 11, 2, 13, 1, 4, 0],
                    color: (opacity = 255) => `rgba(23, 162, 184, ${opacity})`
                  }
                ]
              }}
              width={dimensions.fitWidth}
              chartConfig={{
                backgroundColor: '#42f009',
                backgroundGradientFrom: darkPalette.white,
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientTo: darkPalette.white,
                backgroundGradientOpacity: 0.8,
                decimalPlaces: 0, // optional, defaults to 2dp
                strokeWidth: 2,
                color: (opacity = 255) => `rgba(23, 162, 184, ${opacity})`
              }}
              height={200}
              fromZero
              bezier
              withOuterLines={false}
              onDataPointClick={point => Alert.alert(point.toString())}
              withOuterLines={false}
              style={{ alignItems: 'center', borderRadius: 3 }}
            />
          </View>
          <View style={chartContainer}>
            <Text style={titleStyles}>Weekly Heart Rate</Text>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [74, 68, 76, 74, 75, 84, 73],
                    color: (opacity = 255) => `rgba(239, 117, 79, ${opacity})`
                  }
                ]
              }}
              width={dimensions.fitWidth}
              chartConfig={{
                backgroundColor: '#42f009',
                backgroundGradientFrom: darkPalette.white,
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientTo: darkPalette.white,
                backgroundGradientOpacity: 0.8,
                decimalPlaces: 0, // optional, defaults to 2dp
                strokeWidth: 2,
                color: (opacity = 255) => `rgba(239, 117, 79, ${opacity})`
              }}
              height={200}
              fromZero
              withOuterLines={false}
              onDataPointClick={point => Alert.alert(point.toString())}
              withOuterLines={false}
              style={{ alignItems: 'center', borderRadius: 3 }}
            />
          </View>
          <View style={chartContainer}>
            <Text style={titleStyles}>Steps</Text>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [4897, 11323, 3389, 7720, 10102, 2039, 14302],
                    color: (opacity = 255) => `rgba(112, 174, 110, ${opacity})`
                  }
                ]
              }}
              width={dimensions.fitWidth}
              chartConfig={{
                backgroundColor: '#42f009',
                backgroundGradientFrom: darkPalette.white,
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientTo: darkPalette.white,
                backgroundGradientOpacity: 0.8,
                decimalPlaces: 0, // optional, defaults to 2dp
                strokeWidth: 2,
                color: (opacity = 255) => `rgba(112, 174, 110, ${opacity})`
              }}
              height={200}
              fromZero
              bezier
              withOuterLines={false}
              onDataPointClick={point => Alert.alert(point.toString())}
              withOuterLines={false}
              style={{ alignItems: 'center', borderRadius: 3 }}
            />
          </View>
          <View style={chartContainer}>
            <Text style={titleStyles}>Monthly Heart Rate</Text>
            <BarChart
              data={{
                labels: ['May', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [
                  {
                    data: [65.34, 65.45, 62.34, 66.21, 64.2],
                    color: (opacity = 255) => `rgba(151, 111, 232, ${opacity})`
                  }
                ]
              }}
              width={dimensions.fitWidth - 30}
              chartConfig={{
                backgroundColor: '#42f009',
                backgroundGradientFrom: darkPalette.white,
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientTo: darkPalette.white,
                backgroundGradientOpacity: 0.8,
                decimalPlaces: 2, // optional, defaults to 2dp
                strokeWidth: 2,
                color: (opacity = 255) => `rgba(151, 111, 232, ${opacity})`
              }}
              height={200}
              bezier
              withOuterLines={false}
              onDataPointClick={point => Alert.alert(point.toString())}
              withOuterLines={false}
              style={{ alignItems: 'center', borderRadius: 3 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default StatsPage;
