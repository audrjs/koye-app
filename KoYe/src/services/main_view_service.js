import { Component } from 'react';
import getEnvVars from '../../environment';
const { apiUrl } = getEnvVars();

export const getHotStoresList = () => {

    // const url = Config.serverUrl+'/main';
    console.log(`${apiUrl}/main`);
    return fetch(`${apiUrl}/main`, {
           method: 'GET'
        }).then((res) => res.json())
        .catch((error) => {
           console.error(error);
        });
}