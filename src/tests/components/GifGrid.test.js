import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid'
import { useFecthGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas de <GifGrid>', () => {
    
    const category = 'One Punch';
    
    test('Debe cargar correctamente el componente', () => {
        
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'abc',
                url: 'https://localhost/algo.jpg',
                title: 'cualquier cosa'
            }
        ];
        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    
    
    
})
