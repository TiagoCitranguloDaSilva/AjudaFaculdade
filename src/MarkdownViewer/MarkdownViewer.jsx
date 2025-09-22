import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation, useNavigate } from 'react-router-dom';
import './MarkdownViewer.css';

function MarkdownViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const markdown = location.state?.markdown || 'Nenhum conteúdo foi carregado';

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <>
      <button className="voltar" onClick={handleVoltar}>
        Voltar
      </button>
      <div className="markdown">
        <ReactMarkdown
          children={markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const language = (match?.[1] || 'plaintext').toLowerCase();

              // Evita erro de <div> dentro de <p>
              const isInline = !node?.position?.start || node.position.start.line === node.position.end.line;
              console.log(isInline)
              if (isInline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <SyntaxHighlighter
                  style={tema}
                  language={language}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            }
          }}
        />
      </div>
    </>
  );
}

export default MarkdownViewer;
