import { Button } from '@mui/material'
import { Professor } from '../../../@types/professor';
import { FormatorService } from '../../../services/FormatadorService';
import { ListaStyled, ItemStyled, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";


interface ListaProps {
    professores: Professor[],
    onSelect:(professor: Professor) => void
}



const Lista = (props: ListaProps) => {

    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>  
                    {props.professores.map(professor => (
                        <ItemStyled key={professor.id}>
                        <Foto src={professor.foto}></Foto>
                        <Informacoes>
                            <Nome>
                            {professor.nome}
                            </Nome>
                            <Valor>
                                { FormatorService.valorMonetario(professor.valor_hora)} por hora.
                            </Valor>
                            <Descricao>
                                {FormatorService.limitarTexto(professor.descricao, 200)}
                            </Descricao>
                            <Button onClick={() => props.onSelect(professor)}  sx={{width: '70%'}} >Marcar Aula com {professor.nome}</Button>
                        </Informacoes>
                    </ItemStyled> ))}
                    
                </ListaStyled>

            ) : (
                <ListaVazia>Nenhum Item encontrado !</ListaVazia>
            )}

        </div>
    )
}

export default Lista;
//ctrl D seleciona varias coisas que sao iguais