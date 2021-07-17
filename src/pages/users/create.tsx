import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button  } from '@chakra-ui/react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';

type CreateUserFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email(),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa ter no mínimo 6 caractéres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas não conferem')
  })

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
        <Box>
            <Header/>

            <Flex flex='1' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box 
                    flex='1' 
                    borderRadius={8} 
                    bg='gray.800' 
                    p={['6', '8']}
                    as='form'
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                    <Divider my='8' borderColor='gray.700'/>

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input 
                                name='name' 
                                label='Nome completo'
                                error={formState.errors.name}
                                {...register('name')}
                            />
                            <Input 
                                name='email' 
                                type='email' 
                                label='E-mail'
                                error={formState.errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input 
                                name='password' 
                                type='password' 
                                label='Senha'
                                error={formState.errors.password}
                                {...register('password')}
                            />
                            <Input 
                                name='password_confirmation' 
                                type='password' 
                                label='Confirmação de senha'
                                error={formState.errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink' type='submit' isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}