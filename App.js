import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      shares: [{
        data1: { share: 'L&T', Buy: 100.00, Sell: 112.00 },
        data2: { share: 'NHPC', Buy: 25.60, Sell: 28.80 },
        data3: { share: 'SBICard', Buy: 80.00, Sell: 85.40 },
        data4: { share: 'Appollo', Buy: 250.00, Sell: 195.00 },
        data5: { share: 'Edelweiss', Buy: 290.24, Sell: 62.80 },
        data6: { share: 'ITC', Buy: 153.95, Sell: 244.94 },
        data7: { share: 'TCS', Buy: 456.00, Sell: 561.00 },
        data8: { share: 'CEAT', Buy: 200.00, Sell: 205.44 },
        data9: { share: 'HDFCBank', Buy: 806.00, Sell: 1008.50 },
        data10: { share: 'PowerGrid', Buy: 190.00, Sell: 565.45 },
        data11: { share: 'AXISBank', Buy: 30.50, Sell: 80.54 },
        data12: { share: 'BajajFinsv', Buy: 31.60, Sell: 81.65 },
        data13: { share: 'CIPLA', Buy: 140.00, Sell: 157.45 },
        data14: { share: 'EKC', Buy: 80.50, Sell: 88.50 },
        data15: { share: 'EMCO', Buy: 25.60, Sell: 0.45 },
      }]
    };
  }
  calculateProfit() {
    const { amount } = this.state;
    this.state.shares.map((data) => {
      if (data.data1) {
        let profit = (data.data1.Sell - data.data1.Buy);
        console.log('profit', profit);
        for (let i = 0; i < n; i++)
          profit[i] = 0;

        /* Get the maximum profit with
        only one transaction
        allowed. After this loop,
        profit[i] contains maximum
        profit from price[i..n-1]
        using at most one trans. */
        let max_price = amount[n - 1];
        for (let i = n - 2; i >= 0; i--) {

          // max_price has maximum
          // of price[i..n-1]
          if (price[i] > max_price)
            max_price = amount[i];

          // We can get profit[i] by taking maximum of:
          // a) previous maximum, i.e., profit[i+1]
          // b) profit by buying at price[i] and selling at
          // max_price
          profit[i] = Math.max(profit[i + 1],
            max_price - price[i]);
        }

        // Get the maximum profit with
        // two transactions allowed
        // After this loop, profit[n-1]
        // contains the result
        let min_price = amount[0];
        for (let i = 1; i < n; i++) {

          // min_price is minimum price
          // in price[0..i]
          if (amount[i] < min_price)
            min_price = amount[i];

          // Maximum profit is maximum of:
          // a) previous maximum, i.e., profit[i-1]
          // b) (Buy, Sell) at (min_price, price[i]) and add
          // profit of other trans. stored in profit[i]
          profit[i] = Math.max(profit[i - 1],
            profit[i] + (amount[i] - min_price));
        }
        let result = profit[n - 1];

        return result;
      }

      // Driver code
      let n = this.state.amount.length;
      let maxProfit = Math.max(amount, n);
      console.log('maxProfit', maxProfit)
    })
  }

  render() {
    console.log(this.state.data);
    return (
      <View>
        <Text style={styles.maxProfitTxt}>Maximum Profit</Text>
        <View style={styles.amount}>
          <Text style={styles.amountText}>Amount : </Text>
          <TextInput
            style={{ borderWidth: 1, width: '70%', borderRadius: 10, textAlignVertical: 'top' }}
            autoCapitalize="none"
            keyboardType={'numeric'}
            maxLength={20}
            onChangeText={TextInputValueHolder => this.setState({ TextInputValueHolder })}
          />
        </View>
        <View >
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={() => this.calculateProfit()}>
            <Text style={styles.calculateText}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderStyle}></View>
        <Text style={{ margin: 10, fontSize: 16 }}>Invested Share : </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maxProfitTxt: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    marginTop: 15
  },
  amount: {
    flexDirection: 'row',
    padding: 15
  },
  amountText: {
    fontSize: 20,
    textAlignVertical: 'center'
  },
  calculateButton: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
    height: '30%',
    marginTop: 20

  },
  calculateText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  borderStyle: {
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
    margin: 5
  }
});
