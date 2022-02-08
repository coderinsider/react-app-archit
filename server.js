import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
app.get('/*', (req, res) => {
	const reactApp = renderToString(
		<div>
			<h1>I am working in USA Company</h1>
			<p>This is from a server side</p>
		</div>
	);

	return res.send(
		`
		<html>
		<body>
			<div id="root">${reactApp}</div>
		</body>
		</html>
		`
	);
});
app.listen(8080, () => {
	console.log(`Server running on port: 8080`);
});