import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Título</td>
            <td>Valor</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Projeto</td>
            <td className="deposit">R$10.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/11/2021</td>
          </tr>
          <tr>
            <td>Financiamento</td>
            <td className="withdraw">-R$3.500,00</td>
            <td>Casa</td>
            <td>20/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}