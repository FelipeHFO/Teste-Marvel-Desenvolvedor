import React from 'react';
import DefaultLayoutStyle from './DefaultLayoutStyle.module.css';

function DefaultLayout(props) {
  return (
    <div>
      <header className={DefaultLayoutStyle.header}>
        MARVEL
      </header>
      <main className={DefaultLayoutStyle.main}>
        {props.children}
      </main>
      <footer className={DefaultLayoutStyle.footer}>
        Projeto desenvolvido por Felipe Oliveira.
      </footer>
    </div>
  )
}

export default DefaultLayout;
