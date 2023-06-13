import { ChakraProvider } from "@chakra-ui/react";
import Layout from "lib/layout";
import Routings from "./lib/router/Routings";
import { theme } from "lib/styles/theme";

const App = () => (
  <ChakraProvider theme={theme}>
      <Layout>
        <Routings />
      </Layout>
  </ChakraProvider>
);

export default App;
