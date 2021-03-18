import React from 'react';

import { waitFor, render } from '@testing-library/react';

import Personagem from '../../components/Personagem/Personagem';

describe('Testes para o nome do Personagem', () => {
  it('Deve esperar um valor indefinido para o nome do Personagem', async () => {

    // TEAR UP
    const { getByTestId } = render(<Personagem/>);

    const nameNode = await waitFor(() => getByTestId('nome-personagem'));

    // EXECUTA
    console.log(nameNode);

    expect(nameNode.value).toEqual(undefined);
  })
})
