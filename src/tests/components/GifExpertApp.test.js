import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import GifExpertApp from '../../GifExpertApp'

describe('Pruebas de GifExpertApp', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe mostrar una lista de categorías', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })      
    
})
