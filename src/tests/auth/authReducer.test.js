import {authReducer} from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

  test('Debe de retornar el estado por defecto ', () => {

    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});

  })

  test('Debe de auntentificar y colocar el name del usuario', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Hernando',
      }
    }

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({
      logged: true,
      name: 'Hernando',
    });
    
  })
  
  test('Debe de borrar el name del usuario y logged en false', () => {
    
    const action = {
      type: types.logout,
    }

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({logged: false})

  })
  
})