import React from 'react';
import {mount} from 'enzyme';
import {AppRouter} from '../../router/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {
  
  test('Debería de mostrar login si no está autenticado ', () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
    console.log((wrapper).html());

  });

  test('Debe de mostrar el componente marvel si está autentificado', () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Juan'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('.navbar').exists()).toBe(true);

  });
  
})