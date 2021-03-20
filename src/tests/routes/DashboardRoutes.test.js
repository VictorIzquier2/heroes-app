import React from 'react';
import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes} from '../../router/DashboardRoutes';

describe('Pruebas en DashboardRoutes', () => {

  const contextValue = {
    dipatch: jest.fn(),
    user: {
      logged: true,
      name: 'Juanito'
    }
  }
  

  test('Debe mostrarse correctamente', () => {

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')

  })

})