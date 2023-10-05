import {Home} from './pages/home/Home'
import {Pedidos} from './pages/pedidos/Pedidos'
import {Cardapio} from './pages/cardapio/Cardapio'
import {Relatorios} from './pages/relatorios/Relatorios'
import {PedidosQrCode} from './pages/pedidosqrcode/PedidosQrCode'
import {Entregadores} from './pages/entregadores/Entregadores'
import {Configuracoes} from './pages/configuracoes/Configuracoes'
import {Logout} from './pages/logout/Logout'
import { Login } from './pages/login/Login'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import { Switch } from '@mui/material'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="cardapio" element={<Cardapio />}/>
            <Route path="relatorios" element={<Relatorios />}/>
            <Route path="entregadores" element={<Entregadores />}/>
              {/* <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add Novo Usuário" />}
              />
            </Route>
            <Route path="motorista">
              <Route index element={<List />} />
              <Route path="motorista" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Product" />}
              /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;