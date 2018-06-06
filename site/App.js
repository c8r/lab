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
const BuyButton = require('./BuyButton')

const video = 'https://s3-us-west-1.amazonaws.com/c8r-demo/longdemo.mp4'

module.exports = props => (
  <ThemeProvider theme={theme}>
    <Box bg='black' color='white'>
      <Container>
        <Header py={3}>
          <BlockLink href='/'>
            <Logo
              color='white'
              backgroundColor='black'
              size={32}
            />
          </BlockLink>
        </Header>
        <Box
          pt={5}
          pb={6}
          align='center'>
          <H1 f={6} mb={5}>
            Compositor Lab
            <Sup
              pl={2}
              children='beta'
            />
          </H1>
          <Box pb={5} align='center'>
            <Box mx={-2} mb={4}>
              <Video
                autoPlay
                loop
                muted>
                <source
                  src='https://s3-us-west-1.amazonaws.com/c8r-demo/lab-demo.webm'
                  type='video/webm'
                />
                <source
                  src='https://s3-us-west-1.amazonaws.com/c8r-demo/lab-demo.mp4'
                  type='video/mp4'
                />
              </Video>
            </Box>
            <BuyButton />
            <P>
              MacOS <Strike>$16</Strike> $8/month
            </P>
          </Box>
        </Box>
      </Container>
    </Box>
    <Divider />
    <Footer
      color='white'
      bg='black'>
      <Container py={5}>
        <BlockLink
          mr={4}
          href='https://github.com/c8r/'>
          <svg
            viewBox='0 0 16 16'
            height={24}
            width={24}
            fill='currentcolor'>
            <path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8 ' />
          </svg>
        </BlockLink>
        <BlockLink
          href='https://twitter.com/getcompositor'>
          <svg
            viewBox='0 0 16 16'
            width={24}
            height={24}
            fill='currentcolor'>
            <path d='M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z ' />
          </svg>
        </BlockLink>
        <Box my={4} f={0}>
          Made in NY/LDN/ID •
          © {new Date().getFullYear()} Compositor, Inc.
          All Rights Reserved.
        </Box>
        <Link
          pr={4}
          f={0}
          href='/terms'
          children='Terms of Service'
        />
        <Link
          pr={4}
          f={0}
          href='/privacy'
          children='Privacy'
        />
      </Container>
    </Footer>
  </ThemeProvider>
)
