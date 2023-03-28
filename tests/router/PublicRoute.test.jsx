import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import{render, screen} from '@testing-library/react'

describe('Pruebas en <PublicRoute/>', () => {

    test('debe de mostrar el Children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1> Ruta publica </h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();
        //screen.debug()

    })

});