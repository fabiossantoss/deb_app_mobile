import React from 'react';
import { View, Text, TextInput } from 'react-native';

import DatePicker from 'react-native-datepicker';

import styles from './styles';

const Page = () => {
  console.log('aa');
  return (
    <View style={styles.container}>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>INFORMAÇÕES PESSOAIS</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.textdata}>NOME</Text>
        <TextInput
          // value={this.props.email}
          // onChangeText={this.props.changeEmail}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          // placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.data}>
        <Text style={styles.textdata}>PAI</Text>
        <TextInput
          // value={this.props.email}
          // onChangeText={this.props.changeEmail}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          // placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.data}>
        <Text style={styles.textdata}>MÃE</Text>
        <TextInput
          // value={this.props.email}
          // onChangeText={this.props.changeEmail}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          // placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.data}>
        <Text style={styles.textdata}>DATA NASCIMENTO</Text>
        <DatePicker
          style={{ width: 200 }}
          // date={this.state.date}
          mode="date"
          placeholder="Data Nascimento"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2025-01-01"
          confirmBtnText="Selecionar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          // onDateChange={(date) => {
          //   this.setState({ date });
          // }}
        />
      </View>
    </View>
  );
};

export default Page;
