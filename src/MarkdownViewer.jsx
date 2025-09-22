import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

function MarkdownViewer(){
    const location = useLocation();
    const navigate = useNavigate();
    const markdown = (location.state) ? useLocation().state : "Nenhum conteúdo carregado"
    const handleVoltar = () => {
        navigate('/')
    }
    return (
    
        <>
            <button className="voltar" onClick={handleVoltar}>
                Voltar
            </button>
            <ReactMarkdown>{markdown.markdown}</ReactMarkdown>
        </>
    
    
    );
}



export default MarkdownViewer;
