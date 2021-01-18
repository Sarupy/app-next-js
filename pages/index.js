import { useState } from 'react';

function Contador(){
    const [contador, setContador] = useState('acb')

    function addContador(){
        setContador(contador + 'd')
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Acrescentar</button>
        </div>
    )
}
function Pagina(){
    return <Contador/>
}

export default Pagina