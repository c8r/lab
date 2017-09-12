const React = require('react')
const ThemeProvider = require('cxs/ThemeProvider')
const { Logo } = require('@compositor/logo')
const {
  Box,
  Flex,
  Text,
  H1,
  H2,
  H3,
  P,
  Link,
  BlockLink,
  Btn,
  Sup,
  Container,
  Header,
  Footer,
  Strike,
  Divider,
  Video,
} = require('./components')
const theme = require('./theme')

module.exports = props => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header py={3} mb={[ 4, 5 ]}>
        <BlockLink href='/'>
          <Logo
            size={32}
          />
        </BlockLink>
      </Header>
      <Flex py={[ 5, 6 ]}>
        <Box>
          <H1
            children='Thanks for purchasing Lab!'
          />
          <Text mb={4}>
            We can‘t wait to show you what we have in store.
          </Text>
          <Btn
            href='https://lab.c8r.io'
            children='Download Lab'
          />
        </Box>
      </Flex>
    </Container>
  </ThemeProvider>
)
