import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Aros',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1> Ruta publica </h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1> Pagina Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>

        );
                        
        expect( screen.getByText('Pagina Marvel')).toBeTruthy();


    });



});