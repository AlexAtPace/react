import Lottie from "react-lottie";
import animationData from "../animations/todo.json";
import React from 'react';
import "../App.css";

/*
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/df0f945e-7673-4eb0-bf3d-0840155df5ef/DzA397w09D.json" background="#FFFFFF" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player>
*/

const LottieAnimation = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRation : "XmiDyMid slice"
        }
    }
    return (
        <div className="LottieStuff">
            <h1>Lottie</h1>
            <Lottie options={defaultOptions} height = {300} width = {300}></Lottie>
        </div>
    );
}

export default LottieAnimation;