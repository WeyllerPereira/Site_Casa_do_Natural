import React from 'react';
import { Link } from 'react-router-dom';

const ReservaPage = () => {
    return (
        <div style={{ backgroundColor: '#121212', color: '#FFF' }}>
            <h1>Reserva de Produtos</h1>
            {/* Aqui você pode listar os produtos e permitir que o usuário faça uma reserva */}
            <Link to="/">
                <button>Página Inicial</button>
            </Link>
        </div>
    );
};

export default ReservaPage;
