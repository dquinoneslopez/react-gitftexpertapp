import React from 'react'
import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas en getGifs Fetch', () => {

    test('Debe obtener 15 elementos.', async() => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(15);

    })

    test('No debe obtener nada si no se proporciona un término', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })


})