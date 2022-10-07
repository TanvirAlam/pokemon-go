import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { PokemonNavBar } from "./components/navbar/NavBar";

describe('Main App Test', () => {
    
  test('Renders Nav bar', () => {
    render(<App />, {wrapper: BrowserRouter})
    expect(PokemonNavBar).toMatchInlineSnapshot(`[Function]`);
  });
})
