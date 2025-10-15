import { Button } from "@/components/Button";
import { List } from "@/components/List";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 25
}

const transactions = [
  {
    id: "1",
    value: "R$ 20,00",
    date: "12/04/25",
    type: TransactionTypes.Output,
  },
  {
    id: "2",
    value: "R$ 300,00",
    date: "12/04/25",
    description: "CDB de 110% no banco XPTO",
    type: TransactionTypes.Input
  },
  {
    id: "3",
    value: "R$ 300,00",
    date: "12/04/25",
    description: " CDB de 110% no banco XPTO",
    type: TransactionTypes.Input
  }
]

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => { }
        }}
      />

      <Progress
        data={details}
      />

      <List
        title="Transações"
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Transaction data={item} onRemove={() => { }} />}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro."
      />

      <Button
        title="Nova Transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  )
}