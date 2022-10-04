import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { PokemonNavBar } from "./components/navbar/NavBar";

describe('Main App Test', () => {
  
  test('Renders APP and sees a Nav bar', () => {
    render(<App />, {wrapper: BrowserRouter})
    expect(PokemonNavBar).toMatchInlineSnapshot(`[Function]`);
  });
})
