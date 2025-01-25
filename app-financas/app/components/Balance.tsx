import { StyleSheet, Text, View } from "react-native";

interface BalanceProps {
    balance: string;
    expense: string;
}

export default function Balance({ balance, expense }: BalanceProps) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>
                R$
            </Text>
            <Text style={styles.balance}>
                {balance}
            </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currencySymbol}>
                R$
            </Text>
            <Text style={styles.expense}>
                {expense}
            </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginHorizontal: 14,
    paddingVertical: 22,
    borderRadius: 4,
    zIndex: 99
  },
  item: {

  },
  itemTitle: {
    fontSize: 20,
    color: "#DADADA"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
    currencySymbol: {
        color: "#DADADA",
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expense: {
        fontSize: 22,
        color: '#e74c3c'
    }
});
