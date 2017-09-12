const dxs = require('dxs')

const align = props => props.align ? ({ textAlign: props.align }) : null

module.exports = dxs([
  {
    name: 'Box',
    type: 'div',
    props: {},
    style: props => Object.assign({},
      align(props)
    )
  },
  {
    name: 'Flex',
    type: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      flexWrap: props.wrap ? 'wrap' : null,
      alignItems: props.align,
    })
  },
  {
    name: 'Text',
    type: 'div',
    props: {},
    style: {}
  },
  {
    name: 'Link',
    type: 'a',
    props: {},
    style: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'inherit',
      opacity: '1',
      '&:hover': {
        transition: 'opacity .2s ease-in',
        opacity: '.6'
      }
    }
  },
  {
    name: 'BlockLink',
    type: 'a',
    props: {
      color: 'inherit'
    },
    style: {
      display: 'inline-block',
      textDecoration: 'none'
    }
  },
  {
    name: 'Btn',
    type: 'a',
    props: {
      px: 5,
      py: 3
    },
    style: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '2px',
      fontWeight: '600',
      display: 'inline-block',
      transition: 'color .33s ease-out',
      cursor: 'pointer',
      ':hover': {
        color: '#2d98f1',
        transition: 'color .125s ease-in'
      }
    }
  },
  {
    name: 'H1',
    type: 'h1',
    props: {},
    style: {},
  },
  {
    name: 'H2',
    type: 'h2',
    props: {},
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  },
  {
    name: 'H3',
    type: 'h3',
    props: {},
    style: {},
  },
  {
    name: 'P',
    type: 'p',
    props: {},
    style: {
      lineHeight: 1.5,
    }
  },
  {
    name: 'Sup',
    type: 'sup',
    props: {
      f: 1,
      color: 'gray'
    },
    style: {
      verticalAlign: 'super',
    }
  },
  {
    name: 'Header',
    type: 'header',
    props: {},
    style: {}
  },
  {
    name: 'Footer',
    type: 'footer',
    props: {},
    style: {}
  },
  {
    name: 'Strike',
    type: 'strike',
    props: {
      color: 'gray'
    },
    style: {}
  },
  {
    name: 'Container',
    type: 'div',
    props: {
      mx: 'auto',
      px: 4,
    },
    style: {
      maxWidth: '1152px'
    }
  },
  {
    name: 'Divider',
    type: 'hr',
    props: {
      m: 0
    },
    style: {
      borderTop: 0,
      borderRight: 0,
      borderLeft: 0,
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'inherit'
    }
  },
  {
    name: 'Video',
    type: 'video',
    props: {
      w: 1
    },
    style: {}
  },
])
