import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatarUrso from './assets/avatar-urso.png';
import avatarBatman from './assets/avatar-batman.png';
import avatarAbacate from './assets/avatar-abacate.png';
import avatarAfro from './assets/avatar-afro.png';
import avatarJason from './assets/avatar-jason.png';
import avatarPreguica from './assets/avatar-preguica.png';
import avatarZumbi from './assets/avatar-zumbi.png';
import openSocket from "socket.io-client";

const SERVER = "http://localhost:8080/";

function Dashboard() {
    useEffect(() => {
        const socket = openSocket(SERVER, { transports: ['websocket'] });
        socket.emit("message", "oi");
    }, []);


    return (
        <div className="Dashboard">
            <div className="Dashboard-container">
                <div className="card-dashboard-new">
                    <FaPlusCircle color="grey" size={25} />
                    <spam>Nova sala</spam>
                </div>

                <div className="card-dashboard">
                    <div className="card-container">
                        <div className="avatar-icon">
                            <img src={avatarUrso} alt="avatar" />
                        </div>
                        <h2>Chat sobre Lol</h2>
                        <Link to="/chat">
                            <button>Entrar na sala</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;