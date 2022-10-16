import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSel, setProfessorSel] = useState<Professor |  null>(null);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, []);
    useEffect(() => {
        limparFormulario()
    }, [professorSel])


    function marcarAula(){
        if (professorSel != null) {
            if (validarAulas()) {
                ApiService.post('/professores/'+ professorSel.id +'/aulas', 
                    {nome,
                    email}).then(() => {
                        setProfessorSel(null);
                       setMensagem('Cadrastado com sucesso')
                    }).catch((error) => {
                        setMensagem(error.response?.data.message);
                    }); 
            } else {
                setMensagem('Preencha os dados corretamente');
            }
        }
    }
    function validarAulas(){
        return nome.length > 0 && email.length > 0;
    }
    function limparFormulario(){
        setNome('')
        setEmail('')

    }
 

        return {
            listaProfessores,
            nome,
            setNome,
            email,
            setEmail,
            professorSel,
            setProfessorSel,
            marcarAula,
            mensagem,
            setMensagem
            

        }
}