"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SolarCard: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <CardWrapper isOn={isOn}>
      <CustomSwitch>
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <div className="button">
            <div className="light" />
            <div className="dots" />
            <div className="characters" />
            <div className="shine" />
            <div className="shadow" />
          </div>
        </label>
      </CustomSwitch>
      <ContentWrapper>
        <h2>{isOn ? "Notre Vision" : "Notre Mission"}</h2>
        <p>
          {isOn
            ? "Répondre à la demande croissante d'électricité tout en protégeant notre climat."
            : "Utiliser les dernières solutions de traitement et des décennies d'expérience."}
        </p>

        <Link href="/company/about">
        <Button className="bg-green-700">
          <ArrowRight className="w-5 h-5 text-white" />
        </Button>
        </Link>
      </ContentWrapper>
    </CardWrapper>
  );
};

interface CardProps {
  isOn: boolean;
}

const CardWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background-color: ${({ isOn }) => (isOn ? "#ffffff" : "#ffffff")};
  color: ${({ isOn }) => (isOn ? "#000000" : "#000000")};
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ isOn }) =>
      isOn
        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"};

    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ isOn }) =>
      isOn
        ? "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 100%)"
        : "linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)"};
    mix-blend-mode: overlay;

    pointer-events: none;
  }
`;

const CustomSwitch = styled.div`
  margin-bottom: 20px;

  .switch {
    display: block;
    background-color: black;
    width: 80px;
    height: 105px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0 1px 2px black,
      inset 0 2px 2px -2px white, inset 0 0 2px 15px #47434c,
      inset 0 0 2px 22px black;
    border-radius: 5px;
    padding: 20px;
    perspective: 400px;
    margin: 0 auto;
    position: relative;
  }

  .switch input {
    display: none;
  }

  .switch input:checked + .button {
    transform: translateZ(20px) rotateX(25deg);
    box-shadow: 0 -10px 20px #ff1818;
  }

  .switch input:checked + .button .light {
    animation: flicker 0.2s infinite 0.3s;
  }

  .switch input:checked + .button .shine {
    opacity: 1;
  }

  .switch input:checked + .button .shadow {
    opacity: 0;
  }

  .switch .button {
    display: block;
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    transform-origin: center center -20px;
    transform: translateZ(20px) rotateX(-25deg);
    transform-style: preserve-3d;
    background-color: #9b0621;
    height: 100%;
    position: relative;
    cursor: pointer;
    background: linear-gradient(
      #980000 0%,
      #6f0000 30%,
      #6f0000 70%,
      #980000 100%
    );
    background-repeat: no-repeat;
  }

  .switch .button::before,
  .switch .button::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 50px;
    transform-origin: top;
  }

  .switch .button::before {
    background: linear-gradient(
          rgba(255, 255, 255, 0.8) 10%,
          rgba(255, 255, 255, 0.3) 30%,
          #650000 75%,
          #320000
        )
        50% 50%/97% 97%,
      #b10000;
    top: 0;
    transform: rotateX(-90deg);
  }

  .switch .button::after {
    background-image: linear-gradient(#650000, #320000);
    bottom: 0;
    transform: translateY(50px) rotateX(-90deg);
    box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .switch .light {
    opacity: 0;
    animation: light-off 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#ffc97e, #ff1818 40%, transparent 70%);
  }

  .switch .dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      transparent 30%,
      rgba(101, 0, 0, 0.7) 70%
    );
    background-size: 10px 10px;
  }

  .switch .characters {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, white) 50% 20%/5% 20%,
      radial-gradient(
          circle,
          transparent 50%,
          white 52%,
          white 70%,
          transparent 72%
        )
        50% 80%/33% 25%;
    background-repeat: no-repeat;
  }

  .switch .shine {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, transparent 3%) 50% 50%/97% 97%,
      linear-gradient(
          rgba(255, 255, 255, 0.5),
          transparent 50%,
          transparent 80%,
          rgba(255, 255, 255, 0.5)
        )
        50% 50%/97% 97%;
    background-repeat: no-repeat;
  }

  .switch .shadow {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));
    background-repeat: no-repeat;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes light-off {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    opacity: 0.8;
  }
`;

export default SolarCard;
