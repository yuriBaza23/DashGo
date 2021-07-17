import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex
            align='center'
        >
            { showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Yuri Baza</Text>
                    <Text color='gray.300' fontSize='small'>yurisbaza@gmail.com</Text>
                </Box>
            ) }

            <Avatar size='md' name='Yuri Baza' src='https://github.com/yuriBaza23.png'/>
        </Flex>
    )
}