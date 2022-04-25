import "./Chat.css";
import avatarUrso from './assets/avatar-urso.png';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { appSocket } from './appSocket';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Chat() {
    const [mensagem, setMensagem] = useState({});
    const [mensagens, setMensagens] = useState([{ nome: "abner", mensagem: "hello world!" }]);
    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBackMenu = () => {
        setShow(false);
        navigate('/')
    }

    const renderMensagens = () => {
        return mensagens.map(mensagem =>
            <p className="Chat-message">
                {mensagem.nome}:{mensagem.mensagem}
            </p>
        );
    };

    async function clique() {
        console.log(`Mensagem: ${mensagem.mensagem}`);
        appSocket.emit("nova-mensagem", {
            nome: mensagem.nome,
            mensagem: mensagem.mensagem
        });
        setMensagem(
            {}
        );
    }

    useEffect(() => {
        appSocket.on("mensagens", (mensagens) => {
            setMensagens({
                mensagens
            });
        });
    });

    return (
        <div className="Chat">
            <div className="Chat-container">
                <div className="Chat-tab-lateral">
                    <div className="Chat-tab-lateral-container">
                        <div className="Chat-rooms-line">
                            <img src={avatarUrso} alt="avatar" />
                            <h2>Chat sobre Lol</h2>
                        </div>
                        {/* 
                        <div className="Chat-rooms-line">
                            <img src={avatarUrso} alt="avatar" />
                            <h2>Chat sobre Lol</h2>
                        </div>

                        <div className="Chat-rooms-line">
                            <img src={avatarUrso} alt="avatar" />
                            <h2>Chat sobre Lol</h2>
                        </div> */}
                    </div>
                </div>

                <div className="Chat-allcontent-message-container">

                    <div className="Chat-header">
                        <div className="Chat-avatar-header-container">
                            <img src={avatarUrso} alt="avatar" className="Chat-avatar-header" />
                            <h2>Chat sobre Lol</h2>
                        </div>
                        <FaSignOutAlt size={25} className="Chat-getOut" onClick={handleShow} />
                    </div>


                    <div className="Chat-message-container">
                        <div className="Chat-div-message">
                            {renderMensagens()}
                        </div>

                        <div className="Chat-input-message">
                            <input value={mensagem.mensagem} onChange={(e) => setMensagem({ mensagem: e.target.value, nome: "fixo" })}></input>
                            <FaArrowCircleRight color="grey" size={25} className="Chat-icon" onClick={clique} />
                        </div>
                    </div>



                </div>


            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sair</Modal.Title>
                </Modal.Header>
                <Modal.Body>Atenção! Ao sair você irá sair da sala e voltar para o menu principal, deseja mesmo sair da sala?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Não
                    </Button>
                    <Button variant="danger" onClick={handleBackMenu}>
                        Sim
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Chat;