import api from './api';

export const getPersonagem = (id) => {
  return api.get(`/characters/${id}`);
}

export const getPersonagens = () => {
  return api.get(`/characters`);
}

export const getPersonagemDetails = (id, params) => {
  return api.get(`/characters/${id}/${params}`);
}