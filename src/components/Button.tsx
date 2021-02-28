import {useState} from 'react'


interface ButtonProps{
    color: string;
}

export function Button(props: ButtonProps){
    //funcao para incrementar com typescript
    const [conter, setConter] = useState(1)

    function incremment(){
        setConter(conter + 1);
    }
   
    
    return(
        //no style usando {{}} passa propriedade
        
        <button 
            type="button" 
            style={{backgroundColor: props.color}}
            onClick={incremment}
            > 
            
            {props.color} <strong>{conter}</strong>
        </button>
    );
    
}