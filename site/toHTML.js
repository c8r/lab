module.exports = ({
  body,
  css
}) => `<!DOCTYPE html>
<title>Compositor Lab</title>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<style>*{box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.25;margin:0}
</style>
<style>${css}</style>
${body}
`
