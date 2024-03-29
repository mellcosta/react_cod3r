import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial (num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFactorial (n - 1) * n
}
 
const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    useEffect(function() {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function() {
        if(factorial > 1000000) {
            document.title = 'Maior de 1000000'
        }
    }, [factorial])

    //Desafio
    const isPar = number % 2 === 0

    //Resolução
    const [status, setStatus] = useState('Ímpar')

    useEffect( function() {
        setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exemplo Factorial" />
            <div>
                <span className="text">Factorial: </span>
                <span className="text red"> {factorial === -1 ? 'Não existe' : factorial} </span>
            </div>
            <input type="number" className="input" value={number}
                onChange={e => setNumber(e.target.value)}/>

            <SectionTitle title="Desafio UseEffect" />
            <div>
                <span className="text">Estado: </span>
                <span className="text red">
                    {
                    isPar ? <strong> Par</strong> : <strong> Ímpar</strong>
                    }
                </span>
            </div>

            <SectionTitle title="Resolução" />
            <div>
                <span className="text">Status: </span>
                <span className="text red"> {status} </span>
            </div>
        </div>
    )
}

export default UseEffect
