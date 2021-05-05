import { StyleSheet, Modal, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as React from 'react';

const Select = function (props: any) {
  const { modalVisible, setModalVisible } = props;

  return (
    <Modal transparent={true} animationType="fade" visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ListItem
            key={1}
            containerStyle={styles.listItemLeft}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.label}>Vendedor</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            key={2}
            topDivider
            containerStyle={styles.listItemRight}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.label}>Comprador</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center'
  },
  content: {
    width: '90%'
  },
  listItemLeft: {
    borderTopLeftRadius: 5,
    backgroundColor: '#2D2D30',
    borderTopRightRadius: 5
  },
  listItemRight: {
    borderBottomLeftRadius: 5,
    backgroundColor: '#2D2D30',
    borderBottomRightRadius: 5
  },
  label: {
    fontSize: 16,
    fontFamily: 'Quicksand',
    color: '#FFFFFF'
  }
});

export default Select;
