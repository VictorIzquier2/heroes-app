import React from 'react';
import {mount} from 'enzyme';
import  {PrivateRoute} from '../../router/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <Private />', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn();

  test('Debe de mostrar el componente si está autentificado y guardar el localstorage', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated = {true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    
  })

  test('Debe de bloquear el componente si no está autentificado', () => {

     const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated = {false}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

  })
    

})