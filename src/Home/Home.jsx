
import arquivoMarkPython from '../arquivos/python.md?raw'
import arquivoMarkC from '../arquivos/C.md?raw'
import { useNavigate } from 'react-router-dom'

function Home() {

    const listaColas = [
        ["Python", arquivoMarkPython],
        ["C", arquivoMarkC]
    ]

    const navigate = useNavigate();

    const handleOnClick = (markdown) => {
        navigate('/visualizar', {state: {markdown}})
    }

    return (
        <div>
            <h1>Escolha qual colinha você quer ver:</h1>
            <div className="buttons">
                {listaColas.map((cola, key) => (
                    <button key={key} onClick={() => handleOnClick(cola[1])}>{cola[0]}</button>
                ))}
            </div>
        </div>
    )
}

export default Home;