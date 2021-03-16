import apiV1 from './api';

export const getPersonagem = (id) => {
  return apiV1.get(`/characters/${id}`);
}

export const getPersonagens = () => {
  return apiV1.get(`/characters`);
}

export const getPersonagemDetails = (id, params) => {
  return apiV1.get(`/characters/${id}/${params}`);
}