import React from 'react';

function Personagem({personagem}){
  return (
    <div>
      <ul>
        <li>{personagem.name}</li>
      </ul>
    </div>
  )
}

export default Personagem;
