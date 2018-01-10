// @flow
type Options = {
  [string]: string
}

export default function html(options: Options) {
  const {
    app = 'main',
    vendor = 'vendor',
    charset = 'utf-8',
    title = 'Todos',
    description = '',
    scalable = 'yes',
    themeColor = 'black',
    favicon = 'icon.png',
    appleFavicon = 'apple-icon.png',
    stylesheet = '/css/style.css',
    rootElement = 'root',
    markup
  } = options

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="${charset}">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <!-- Mobile -->
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=${scalable}">
        <!-- Chrome / Android -->
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="theme-color" content="${themeColor}">
        <link rel="icon" href="${favicon}">
        <!-- Safari / iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="apple-touch-icon-precomposed" href="${appleFavicon}">
        <!-- Styles -->
        <link rel="stylesheet" href="${stylesheet}" />
      </head>
      <body>
        <div id="${rootElement}">${markup}</div>

        <script src="/app/${vendor}.bundle.js"></script>
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `
}
