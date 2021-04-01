import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
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