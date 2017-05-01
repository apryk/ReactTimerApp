import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'controls': {
    'display': 'flex',
    'justifyContent': 'center'
  },
  'controls button': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 3 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 3 }]
  },
  'controls button:first-child': {
    'marginRight': [{ 'unit': 'rem', 'value': 1.5 }]
  }
});
