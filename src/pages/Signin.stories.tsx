import { rest } from 'msw';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { Signin } from './Signin';

export default {
    title: 'Pages/Sign In',
    component: Signin,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado com sucesso!'
                    }));
                }),
            ],
        },
    }
} as Meta;

export const Default: StoryObj = {
    // async function - wait for expect function 
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'gsmmadeira1@gmail.com');
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument();
        });
    }
}
