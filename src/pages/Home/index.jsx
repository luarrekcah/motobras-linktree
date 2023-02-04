import React from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Image, Button } from "react-bootstrap";

import Logo from '../../assets/logo.png'
import vcf from '../../assets/contato.vcf'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const buttons = [
  {
    type: 'danger',
    icon: faWhatsapp,
    text: 'WhatsApp 1',
    url: 'https://wa.me/+556899989858',
    customStyle: ''
  },
  {
    type: 'danger',
    icon: faWhatsapp,
    text: 'WhatsApp 2',
    url: 'https://wa.me/+556899524750',
    customStyle: ''
  },
  {
    type: 'danger',
    icon: faPhone,
    text: 'Número fixo',
    url: 'tel:+556832351084',
    customStyle: ''
  },
  {
    type: 'danger',
    icon: faInstagram,
    text: 'Instagram',
    url: 'https://www.instagram.com/motobras_acrelandia/',
    customStyle: ''
  },
  {
    type: 'danger',
    icon: faFacebook,
    text: 'Facebook',
    url: 'https://fb.me/motobras.acrelandia',
    customStyle: ''
  },
  {
    type: 'danger',
    icon: faContactBook,
    text: 'Adicionar aos contatos',
    url: vcf,
    customStyle: ''
  }
]

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          width="150"
          src={Logo}
          alt="logo"
          style={{marginBottom: 30}}
        />
        <div className="d-grid gap-2">
        {buttons.map(i => {
          return (
            <Button href={i.url} style={i.customStyle !== '' ? i.customStyle : {width: 300}} variant={i.type} size="lg">
               <FontAwesomeIcon icon={i.icon} />{i.text !== '' ? ' ' + i.text : ''}
            </Button>
          )
        })}

        </div>
        
      </header>
      <footer>
      <p>Agência Gênios - Publicidade e Desenvolvimento de Sistemas</p>
      <a href="https://wa.me/+556892402096" style={{color: "#fff"}}>Exclusivo para clientes</a>
      </footer>
    </div>
  );
};

export default Home;
