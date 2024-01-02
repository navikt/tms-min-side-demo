import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Dokumenter from './dokumenter/Dokumenter';

test("dokumentarkiv", async () => {

    render(
        <Dokumenter language={"nb"}/>
        );

    expect(await screen.findByRole("heading", { name: "Blabla" })).toBeInTheDocument()
});
  