import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from "react-router-dom/server";import path from 'path';
import fs from 'fs';
import App from './src/App';

const app = express();

app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
   	const reactApp = renderToString(
		<Router location={req.url}>
			<App />
		</Router>
   	);
  	console.log(req.url);
	const htmlDisplay = path.resolve('./build/index.html');
	fs.readFile(htmlDisplay, 'utf8', (err, data) => {
		if(err) {
			return res.status(500).send(err);
		}
		return res.status(200).send(
			data.replace("<div id='root'></div>", `<div id="root">${reactApp}</div>`)
		);
	});
});

app.listen(8082, () => {
   console.log('Server is listening on port 8082');
});