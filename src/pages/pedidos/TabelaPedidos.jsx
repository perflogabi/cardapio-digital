
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const List = () => {
    
  const rows = [
    {
      id: 1143155,
      data: "20/10/23",
      hora: "18h",
      saida: '18h20min',
      producao: "15min",
      entrega: 'Delivery',
      pagamento: 'Cartão Crédito',
      status: "Pendente",
    },
    {
        id: 1143155,
        data: "20/10/23",
        hora: "18h",
        saida: '18h20min',
        producao: "15min",
        entrega: 'Delivery',
        pagamento: 'Dinheiro',
        status: "Aceito",
    },
    {
        id: 1143155,
        data: "20/10/23",
        hora: "18h",
        saida: '18h20min',
        producao: "15min",
        entrega: 'Local',
        pagamento: 'Pix',
        status: "Producao",
    },
    {
        id: 1143155,
        data: "20/10/23",
        hora: "18h",
        saida: '18h20min',
        producao: "15min",
        entrega: 'Delivery',
        pagamento: 'Dinheiro',
        status: "Entrega",
    },
    {
        id: 1143155,
        data: "20/10/23",
        hora: "18h",
        saida: '18h20min',
        producao: "15min",
        entrega: 'Local',
        pagamento: 'Pix',
        status: "Aceito",
    },
   
  ];
  return (

    <TableContainer component={Paper} className="table" sx={{ width:'70%', margin:'0 8rem', padding:'20px 40px'}}>
      <Table sx={{ minWidth: 650, width:'100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Pedido</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Entrada</TableCell>
            <TableCell className="tableCell">Produção</TableCell>
            <TableCell className="tableCell">Entrega</TableCell>
            <TableCell className="tableCell">Pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Saída</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="">{row.id}</TableCell>
              <TableCell className="">{row.data}</TableCell>
              <TableCell className="">{row.hora}</TableCell>
              <TableCell className="">{row.producao}</TableCell>
              <TableCell className="">{row.entrega}</TableCell>
              <TableCell className="">{row.pagamento}</TableCell>
              <TableCell className="">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="">{row.saida}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;