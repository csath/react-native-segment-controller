# react-native-segment-controller [![npm version](https://badge.fury.io/js/react-native-segment-controller.svg)](https://badge.fury.io/js/react-native-segment-controller)
A react-native segment controller for both android and ios. You can define any number of tabs or segemnts and this will automatically adjust according to the wrapped view's width. You can also add badge count to specify any integer to user.

# Demo

![Alt text](/screenshots/1.gif?raw=true "segment-controller")

# Installation
```
yarn add react-native-segment-controller  or npm install --save react-native-segment-controller
```

# Usage
```js
import SegmentControl from 'react-native-segment-controller';

 <SegmentControl
          values={['One', 'Two', 'Three', 'Four']}
          badges={[0, 5, 0, 2]}
          selectedIndex={0}
          height={30}
          onTabPress={() => {}}
          borderRadius={5}
 />
 ```
 # Prop-types
 
 | Prop name  |Type |
| ------------- | ------------- |
| values  | list - list of names for Tabs  |
| badges  | list - list of integers matching to defined tab names corresponding to indicate any badge count need to be specified |
| onTabPress  | function - this returns the selected tab index  |
| selectedIndex  | int - indicates the selected tab index corresponding to given values list  |
| tabsContainerStyle  | int - radius of the container  |
| tabBadgeContainerStyle  | object -  styles for view  |
| activeTabBadgeContainerStyle  | object -  styles for view  |
| tabBadgeStyle  | object -  styles for view  |
| activeTabBadgeStyle  | object -  styles for view  |
| borderRadius  | int - radius of the container |
| tabStyle  | object -  styles for view  |
| activeTabStyle | object -  styles for view |
| tabTextStyle  | object -  styles for Text  |
| activeTabTextStyle  | object -  styles for Text  |
| height  | int -  height in number of pixels  |

# Example

checkout sample directory and findout a react-native app.
First run ``` npm install or yarn```

then run 
``` 
react-native run-android  or  react-native run-ios
```
