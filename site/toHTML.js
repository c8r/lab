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
<meta name='twitter:card' content='summary' />
<meta name='twitter:site' content='@getcompositor' />
<meta name='twitter:title' content='Compositor Lab' />
<meta name='twitter:description' content='' />
<meta name='twitter:image' content='https://compositor.io/logo/dist/lab.png' />
${body}
<script>
(function(i, s, o, g, r, a, m) {
i["GoogleAnalyticsObject"] = r;
i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o), m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-78113757-1", "auto");
ga("send", "pageview");
</script>
`
