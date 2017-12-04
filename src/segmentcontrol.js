import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const Segment = ({ isTabActive, index, badge, text, firstTabStyle, lastTabStyle, tabStyle, activeTabStyle, tabTextStyle, activeTabTextStyle, tabBadgeContainerStyle, activeTabBadgeContainerStyle,
  tabBadgeStyle, activeTabBadgeStyle, onTabPress, height }) => {
  return (
    <TouchableOpacity
      style={[
        {height},
        styles.tabStyle,
        tabStyle,
        isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
        firstTabStyle,
        lastTabStyle]}
      onPress={() => onTabPress(index)}
      activeOpacity={1}
    >
      <View style={styles.segmentContainer}>
        <Text
          style={[
            styles.tabTextStyle,
            tabTextStyle,
            isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {text}
        </Text>
        {
          badge ?
            <View style={[
              styles.tabBadgeContainerStyle,
              tabBadgeContainerStyle,
              isTabActive ? [styles.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] : {}]}
            >
              <Text style={[
                styles.tabBadgeStyle,
                tabBadgeStyle,
                isTabActive ? [styles.activeTabBadgeStyle, activeTabBadgeStyle] : {}]}
              >
                {badge}
              </Text>
            </View> : null
        }
      </View>
    </TouchableOpacity>
  );
};

const handleTabPress = (index, selectedIndex, onTabPress) => {
  if (selectedIndex !== index) {
    onTabPress(index);
  }
};

const SegmentedControlTab = ({ selectedIndex, values, badges, borderRadius, tabsContainerStyle, tabStyle, activeTabStyle, tabTextStyle, activeTabTextStyle, tabBadgeContainerStyle, activeTabBadgeContainerStyle,
  tabBadgeStyle, activeTabBadgeStyle, onTabPress, height
}) => {
  const firstTabStyle = [{ borderRightWidth: 0, borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius }];
  const lastTabStyle = [{ borderLeftWidth: 1, borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius }];

  return (
    <View
      style={[styles.tabsContainerStyle, tabsContainerStyle, {borderRadius} ]}
      removeClippedSubviews={false}
    >
      {
        values.map((item, index) => {
          return (
            <Segment
              key={index}
              index={index}
              badge={badges && badges[index] ? badges[index] : false}
              isTabActive={selectedIndex === index}
              text={item}
              onTabPress={index => handleTabPress(index, selectedIndex, onTabPress)}
              firstTabStyle={index === 0 ? firstTabStyle : {}}
              lastTabStyle={index === values.length - 1 ? lastTabStyle : {}}
              tabStyle={[tabStyle, index !== 0 && index !== values.length - 1 ? { borderRightWidth: 0 } : {}]}
              activeTabStyle={activeTabStyle}
              tabTextStyle={tabTextStyle}
              activeTabTextStyle={activeTabTextStyle}
              tabBadgeContainerStyle={tabBadgeContainerStyle}
              activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
              tabBadgeStyle={tabBadgeStyle}
              activeTabBadgeStyle={activeTabBadgeStyle}
              height={height}
            />
          );
        })
      }
    </View>
  );
};

SegmentedControlTab.propTypes = {
  values: PropTypes.array.isRequired,
  badges: PropTypes.array,
  onTabPress: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  tabsContainerStyle: ViewPropTypes.style,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
  borderRadius: PropTypes.number,
  tabStyle: ViewPropTypes.style,
  activeTabStyle: ViewPropTypes.style,
  tabTextStyle: Text.propTypes.style,
  activeTabTextStyle: Text.propTypes.style,
  tabBadgeContainerStyle: Text.propTypes.style,
  height: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0082C0',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  activeTabStyle: {
    backgroundColor: '#0082C0'
  },
  tabTextStyle: {
    color: '#0082C0'
  },
  activeTabTextStyle: {
    color: 'white'
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: '#0082C0',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 0
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: 'white'
  },
  tabBadgeStyle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2
  },
  activeTabBadgeStyle: {
    color: 'black'
  },
  segmentContainer: {
    flexDirection: 'row'
  }
});

export default SegmentedControlTab;
