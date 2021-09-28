interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor:any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col mb-2">
            <label className = "mb-4">
                {props.texto}
            </label>
            <input className={`
                border border-purple-500 rounded-lg
                focus: outline-none bg-gray-100
                px-4 py-2
            `}
                onChange ={e =>props.valorMudou?.(e.target.value)}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
            />
        </div>
    )
}