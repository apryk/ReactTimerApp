import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'top-bar': {
    'backgroundColor': '#333333'
  },
  'top-bar ul': {
    'backgroundColor': '#333333'
  },
  'top-bar menu-text': {
    'color': 'white'
  },
  'top-bar menu > menu-text > a': {
    'display': 'inline',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'top-bar active-link': {
    'fontWeight': 'bold'
  }
});
