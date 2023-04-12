import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const SearchInput = () => {
  const [text, onChangeText] = React.useState('Batman');
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        maxLength={12}
        onChangeText={onChangeText}
        value={text}
        placeholder='enter movie title here'
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        color: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginHorizontal:30
        
    },
  });
  
  
  export default SearchInput;