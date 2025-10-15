import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { router } from "expo-router";
import { View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }} >
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      // rightButton={{
      //   icon: 'edit',
      //   onPress: () => { }
      // }}
      />

      <View style={{ marginTop: 22, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para a praia, Apple Watch"
        />

        <CurrencyInput
          label="Valor alvo (R$)"
          value={2400}
        />

        <Button
          title="Salvar"
          onPress={() => router.back()}
        />
      </View>
    </ View>
  )
}