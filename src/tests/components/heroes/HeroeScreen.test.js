import React from 'react';
import { mount } from 'enzyme';
import { HeroeScreen } from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router';

describe('Pruebas en <HeroeScreen />', () => {
  
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }
  const wrapper = mount(
    <MemoryRouter initialEntries={['/heroe']}>
      <HeroeScreen history={history} />
    </MemoryRouter>
  );

  test('Debe de mostrarse correctamente redirect si no hay argumentos ', () => {

    expect(wrapper.find('Redirect').exists()).toBe(true);

  });

  test('Debe de mostrar un heroe si el parámetro existe y se encuentra ', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path='/heroe/:heroeId' component={HeroeScreen} />
     </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);

  });

  test('Debe de regresar a la pantalla anterior con PUSH', () => {

    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          path='/heroe/:heroeId' 
          component={() => <HeroeScreen history={history} />}
        
        />
     </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();

  })

  test('Debe de regresar a la pantalla anterior GOBACK ', () => {
   
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          path='/heroe/:heroeId' 
          component={() => <HeroeScreen history={history} />}
        />
     </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(history.push).toHaveBeenCalledTimes(0);
    expect(history.goBack).toHaveBeenCalled();

  })

  test('Debe de llamar al redirect si el heroe no existe', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider123123']}>
        <Route
          path='/heroe/:heroeId'
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');

  })
  
  
})