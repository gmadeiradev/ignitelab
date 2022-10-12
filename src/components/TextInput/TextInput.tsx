import { InputHTMLAttributes, ReactNode } from 'react';

// using composition pattern
// read the docs: https://reactjs.org/docs/composition-vs-inheritance.html

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({children}: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-1 ring-cyan-300'>
            {children}
        </div>
    )
};

function TextInputIcon() {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {

    return (
        <input className='bg-transparent outline-none flex-1  text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />
    )
};

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}