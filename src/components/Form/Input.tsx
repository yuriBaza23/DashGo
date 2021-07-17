import { 
    Input as ChakraInput, 
    FormLabel, 
    FormControl,
    InputProps as ChakraInputProps, 
    FormErrorMessage
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
    return(
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              id={name}
              name={name}
              focusBorderColor='pink.500'
              bg='gray.900'
              variant='filled'
              size='lg'
              _hover={{
                bgColor: 'gray.900'
              }}
              ref={ref}
              {...rest}
            />

            { !!error && (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            ) }
          </FormControl>
    )
}

export const Input = forwardRef(InputBase)