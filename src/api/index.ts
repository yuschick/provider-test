import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

// const release = prop('RELEASE_SHA', 'unknown-sha');
// const environment = prop('ENVIRONMENT', 'development');
// const apiBaseUrl = prop('API_BASE_URL');
// const sessionBaseUrl = `${apiBaseUrl}/session`;
// const groupsBaseUrl = `${apiBaseUrl}/groups`;
// const mediasBaseUrl = `${apiBaseUrl}/medias`;
// const invitationsBaseUrl = `${apiBaseUrl}/invitations`;
// const usersBaseUrl = `${apiBaseUrl}/users`;

const client = axios.create({
  baseURL: apiBaseUrl,
});

export default client;
export const paths = {
  groups: `${apiBaseUrl}/groups`,
};
