import react from 'react'


export function TrocaTexto(){
    
    function alterar(){
        
    }
    var texto ="ola";
    return (
        <div>
            <h1>{texto}</h1>
            <input type="text" className='novoTexto'/>
            <button onClick={alterar}>Click</button>
        </div>    
        
    );
}