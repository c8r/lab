const React = require('react')
const cxs = require('cxs/component')

const style = {
  fontSize: '16px',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '2px',
  fontWeight: '600',
  display: 'inline-block',
  transition: 'color .33s ease-out',
  cursor: 'pointer',
  '&:hover': {
    color: '#2d98f1',
    transition: 'color .125s ease-in'
  },
  '&:active': {
    background: 'transparent',
    boxShadow: 'none'
  }
}

const Form = cxs('form')({
  '& .stripe-button-el span': {
    height: 'auto',
    lineHeight: 'inherit',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  '& button[type=submit]': style,
  '& button[type=submit] span': style
})

module.exports = () => (
  <Form
    action="https://payments.compositor.sh/lab"
    method="POST">
    <script
      className='stripe-button x17xxc0m'
      src='https://checkout.stripe.com/checkout.js'
      data-key='pk_live_HI9t2xO5KTb4gmPSaTq2h3cN'
      data-amount='800'
      data-label='Buy Now'
      data-name='Compositor, Inc.'
      data-description='Lab - React UI component design tool - $8/mo'
      data-image='https://compositor.io/logo/dist/compositor.png'
      data-locale='auto'
    />
  </Form>
)
