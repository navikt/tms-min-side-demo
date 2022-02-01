const fs = require('fs');
const path = require('path');
const express = require('express');
const { createServer: createViteServer } = require('vite');
const { injectDecoratorServerSide } = require('@navikt/nav-dekoratoren-moduler/ssr');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = async function configureServer() {
    const app = express();
    const indexHtmlLocation = isDevelopment ? './index.development.html' : './index.html';

    const vite = await createViteServer({
        server: { middlewareMode: 'ssr' },
    });
    
    if (isProduction) {
        app.use(express.static('dist/client', { index: false }));
    }

    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
        const url = req.originalUrl;
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '..', indexHtmlLocation), 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            const html = await injectDecoratorServerSide({
                env: isDevelopment ? 'dev' : 'prod',
                filePath: indexHtmlLocation,
                simple: true,
                chatbot: false,
                taSurveys: false
            });
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            vite.ssrFixStacktrace(e);
            console.error(e);
            res.status(500).end(e.message);
        }
    });

    return app;
};
