import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function Dropdown({ items, placeholder }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={() => {}}
      placeholder={placeholder}
      placeholderStyle={{ fontSize: 12 }}
      style={{
        width: 'auto',
        minWidth: 80,
        height: 'auto',
        minHeight: 40,
        backgroundColor: 'rgba(245,245,245,0.8)', // semi-transparent
        borderWidth: 0, // no border
      }}
      dropDownContainerStyle={{
        width: 'auto',
        minWidth: 80,
        backgroundColor: 'rgba(245,245,245,0.8)', // semi-transparent
        borderWidth: 0, // no border
      }}
    />
  );
}
export function DataSelection() {
    const items1 = Array.from({ length: 8 }, (_, i) => ({
        label: String(2025 - i),
        value: String(2025 - i),
    }));
    const items2 = [
      { label: 'Janeiro', value: 'Janeiro' },
      { label: 'Fevereiro', value: 'Fevereiro' },
      { label: 'Março', value: 'Março' },
      { label: 'Abril', value: 'Abril' },
      { label: 'Maio', value: 'Maio' },
      { label: 'Junho', value: 'Junho' },
      { label: 'Julho', value: 'Julho' },
      { label: 'Agosto', value: 'Agosto' },
      { label: 'Setembro', value: 'Setembro' },
      { label: 'Outubro', value: 'Outubro' },
      { label: 'Novembro', value: 'Novembro' },
      { label: 'Dezembro', value: 'Dezembro' }
    ];
    const items3 = Array.from({ length: 31 }, (_, i) => ({
        label: String(i + 1),
        value: String(i + 1),
    }));

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 10}}>
                <Text style={styles.titleFree}>Selecione a Data:</Text>
            </View>
            <View style={styles.header}>
                <View style={[styles.cardFree, { zIndex: 1000 }]}>
                    <Dropdown items={items1} placeholder="Ano"/>
                </View>
                <View style={[styles.cardFree, { zIndex: 900 }]}>
                    <Dropdown items={items2} placeholder="Mês"/>
                </View>
                <View style={[styles.cardFree, { zIndex: 800 }]}>
                    <Dropdown items={items3} placeholder="Dia"/>
                </View>
                <View style={[styles.cardFree]}>
                    <Image
                        style={[styles.cardFree, { width: 60, flexBasis: undefined }]}
                        resizeMode="center"
                        source={require('../../assets/icons/UI/delete.png')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
    },
    header:{
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        width: "100%",
        display: 'flex',
    },

    cardFree:{
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 10,
    },  

    titleFree: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'black',
    },
    imageStyle:{
        width: 'auto',
        minWidth: 80,
        height: 'auto',
        minHeight: 40,
        backgroundColor: 'rgba(245,245,245,0.8)',
        borderWidth: 0,
    }
});