import { Flex, Text,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Alert,
  Grid,
  Tag,
  AlertTitle
} from "@chakra-ui/react";
import { useState } from "react";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [secret, setSecret] = useState('');

  const closeModal = () => {
    setSecret('');
    onClose();
  }
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs" onClick={() => onOpen()}>{new Date().getFullYear()} akto</Text>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Akto Inc.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='secret tell you will...' onChange={ev => setSecret(ev.target.value)} />
            {secret === 'yoda' ? 
            getStats()
            : null}
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => {
              localStorage.clear();
            }}>Reset</Button>
            <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  );
};

export default Footer;

function getStats() {
  const data = localStorage.getItem('akto');
  const aktoRatings = localStorage.getItem('aktoRatings');
  const ratings = aktoRatings ? JSON.parse(aktoRatings) : {}
  const stats = data ? JSON.parse(data) : data;
  
  return (
  <Alert my='4' borderRadius='md' p='4' display='grid'>
    <AlertTitle>
    You must unlearn what you have learned
    </AlertTitle>
    { data ? Object.entries(stats).map(([category, files])=> (
      <Stat category={category} files={files} ratings={ratings?.[category]} />
    )) : 
    <Text>
    Patience you must have, my young Padawan. Fear is the path to the dark side 
    </Text>
    }
  </Alert>)
}

const Stat = ({category, files, ratings}) =>  (
  <Grid>
    <h6>{category}</h6>
    <ul>
      {Object.entries(files).map(([fileName, count]: any) => (
        <li>{fileName} - <Tag>{count}</Tag>,  <Tag>
          {average(ratings?.[fileName])}
          </Tag>
          </li>
      ))}
    </ul>
  </Grid>
)

const average = (arr: number[]) => {
  return arr ? arr?.reduce((result, value) => result + value, 0) / arr.length: null;
}