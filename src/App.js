import React, { useState, useEffect } from 'react';
import './App.css';
import emailIcon from './icons/gmail.png';
import linkedinIcon from './icons/linkedin.png';
import jsIcon from './icons/js.png';
import reactIcon from './icons/react.png';
import tsIcon from './icons/ts.png';
import angularIcon from './icons/angular.png';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import phpIcon from './icons/php.png';
import cyIcon from './icons/cy.png';
import seleniumIcon from './icons/selenium.png';
import jasmineIcon from './icons/jasmine.png';
import githubIcon from './icons/github.png'

const projects = [
  {
    title: 'Sistema hospitalar',
    description: 'Este projeto é um sistema hospitalar completo desenvolvido com Angular (frontend), Node.js (backend com JSON Server simulado) e TypeScript. Ele permite o cadastro e login de médicos e pacientes, agendamento de consultas, visualização de horários disponíveis, pagamentos via Pix e gerenciamento de atendimentos.',
    link: 'https://github.com/RonaldoJunior999/sistema-hospitalar-angular-typescript-node-teste-jasmine-karma',
  },
  {
    title: 'Sistema bancário',
    description: 'Projeto completo de um sistema bancário desenvolvido com  React, Node e teste com Cypress para cadastro e operações de clientes, incluindo validação, CRUD completo e testes automatizados.',
    link: 'https://github.com/RonaldoJunior999/Sistema-Bancario-com-React-Node.js-Prisma-Cypress',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre', 'projetos', 'contato'];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    gap: '10px',
    padding: '6px 10px',
    borderRadius: '12px',
    transition: 'background-color 0.3s ease',
    marginBottom: '12px',
  };

  const iconStyle = {
    borderRadius: '12px',
    objectFit: 'contain',
    display: 'block',
    width: '35px',
    height: '35px',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '40px 20px' }}>
        <img 
    src={require('./icons/perfil.jpg')} 
    alt="Foto de Perfil" 
    style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '16px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
    }} 
  />
        <h1>Ronaldo Júnior</h1>
        <h3>Desenvolvedor full-stack | Quality Assurance | Consultor Educacional </h3>
        <nav>
          <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>Sobre</a>
          <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''}>Projetos</a>
          <a href="#contato" className={activeSection === 'contato' ? 'active' : ''}>Contato</a>
          <a href="#linguagens" className={activeSection === 'linguagens' ? 'active' : ''}>Linguagens</a>
           <a href="#testes" className={activeSection === 'testes' ? 'active' : ''}>Testes</a>
        </nav>
      </header>

      <main>
       <section id="sobre" className="sobre-section">
  <h2 className="sobre-titulo">Sobre mim</h2>
  <div className="sobre-box">
    <p>
      Sou um desenvolvedor de softwre apaixonado por tecnologia e inovação, com vasta experiência em desenvolvimento de software e em qualidade de software (QA). Estou em busca por novos aprendizados e desafios profissionais.
    </p>
  </div>
</section>

<section id="linguagens">
  <p></p>
  <p></p>
  <h2 className="section-title">Linguagens de Programação</h2>
  
  <div className="circle-container">
    {[
      { name: 'JavaScript', icon: jsIcon },
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'Angular', icon: angularIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'PHP', icon: phpIcon },
    ].map((lang, index) => (
      <div className="circle-item" key={index}>
        <img src={lang.icon} alt={lang.name} />
        <p>{lang.name}</p>
      </div>
    ))}
  </div>
</section>


<section id="testes">
  <p></p>
  <p></p>
  <h2 className="section-title">Testes</h2>
  
  <div className="circle-container">
    {[
      { name: 'Cypress', icon: cyIcon },
      { name: 'Selenium', icon: seleniumIcon },
      { name: 'Jasmine', icon: jasmineIcon },

    ].map((lang, index) => (
      <div className="circle-item" key={index}>
        <img src={lang.icon} alt={lang.name} />
        <p>{lang.name}</p>
      </div>
    ))}
  </div>
</section>


        <section id="projetos">
          <h2 style={{ textAlign: 'center',  fontSize: '1.9rem'}}>Projetos</h2>
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </div>
            ))}
          </div>
        </section>

 <section id="contato" style={{ textAlign: 'center', padding: '60px 20px', color: '#fff' }}>
  <h2 style={{ marginBottom: '40px' }}>Minhas redes sociais</h2>

  <div
    className="contato-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
    }}
  >
    {[{
      href: 'mailto:ron.junior1705@gmail.com?subject=Contato&body=Olá, Ronaldo!',
      alt: 'Email',
      icon: emailIcon,
      label: 'E-mail',
    }, {
      href: 'https://linkedin.com/in/ronaldo-junior-5015rj',
      alt: 'LinkedIn',
      icon: linkedinIcon,
      label: 'Linkedin',
    }, {
      href: 'https://github.com/RonaldoJunior999?tab=repositories',
      alt: 'GitHub',
      icon: githubIcon,
      label: 'Github',
    }].map(({ href, alt, icon, label }, idx) => (
      <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            padding: '10px',
            borderRadius: '12px',
            transition: 'background-color 0.3s ease',
            width: '55px',
            height: '55px',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img
            src={icon}
            alt={alt}
            style={{
              borderRadius: '12px',
              objectFit: 'contain',
              width: '70px',
              height: '70px',
              display: 'block',
            }}
          />
        </a>
        <span style={{ fontSize: '14px', color: '#fff', userSelect: 'none' }}>{label}</span>
      </div>
    ))}
  </div>
</section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Ronaldo Junior - Feito com React</p>
      </footer>
    </div>
  );
}

export default App;
