import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFecthGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe devolver el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);  
        
    })
    
    test('Debe devolver un array de imágenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data).not.toEqual([]);
        expect(loading).toBe(false);  
                
    })
    
    
    
})
