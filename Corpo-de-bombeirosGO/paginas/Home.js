import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.viewEnd}>
          <View style={styles.popUp}>
            <Pressable
              style={[styles.addBtn, styles.buttonClose]}
              onPress={() =>
                navigation.navigate("Equipe", setModalVisible(false))
              }
            >
              <Text style={styles.textStyle}>Busca de Corpos</Text>
            </Pressable>
            <Pressable
              style={[styles.addBtn, styles.buttonClose]}
              onPress={() =>
                navigation.navigate("EquipeBens", setModalVisible(false))
              }
            >
              <Text style={styles.textStyle}>Busca de Bens</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.viewEnd}>
        <View style={styles.addBox}>
          <Pressable
            style={[styles.addBtn, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.BtnTextStyle}>Adicionar Ocorrência</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewEnd: {
    alignItems: "flex-end",
  },

  popUp: {
    width: 140,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
  },

  addBox: {
    margin: 20,
  },

  addBtn: {
    padding: 10,
  },

  buttonOpen: {
    borderRadius: 4,
    backgroundColor: "#263238",
  },
  buttonClose: {
    width: 140,
    borderBottomWidth: 1,
    backgroundColor: "#ECEFF1",
  },

  BtnTextStyle: {
    color: "#ECEFF1",
    textAlign: "center",
  },

  textStyle: {
    color: "#263238",
    textAlign: "center",
  },
});
