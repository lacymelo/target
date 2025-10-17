import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)

  const params = useLocalSearchParams<{ id?: string }>()

  const targetDatabase = useTargetDatabase()

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert("Atenção", "Preencha nome e valor.")
    }

    setIsProcessing(true)

    if (params.id) {

    } else {
      create()
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount })

      setIsProcessing(false)

      Alert.alert("Nova Meta", "Meta criada com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a meta.")
      console.log(error)
      setIsProcessing(false)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }} >
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      />

      <View style={{ marginTop: 22, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para a praia, Apple Watch"
          value={name}
          onChangeText={setName}
        />

        <CurrencyInput
          label="Valor alvo (R$)"
          value={amount}
          onChangeValue={(val) => setAmount(val ?? 0)}
        />

        <Button
          isProcessing={isProcessing}
          title="Salvar"
          onPress={handleSave}
        />
      </View>
    </ View>
  )
}