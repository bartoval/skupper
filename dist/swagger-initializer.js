window.onload = function () {
  window.ui = SwaggerUIBundle({
    url: '/cmd/network-observer/spec/openapi.yaml',
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: 'StandaloneLayout',
    customCss: `
    .swagger-ui .topbar { 
      background-color: #82caff; 
    }
    .swagger-ui .topbar .topbar-wrapper img {
      content: url('https://skupper.io/images/skupper-logo-horizontal.svg');
      width: 150px; 
      height: auto;
    }
      `,
  });
};
