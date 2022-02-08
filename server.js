import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './src/pages/Home';
const app = express();
app.use(express.static('./build', {
	index: false
}))
app.get('/*', (req, res) => {
	const reactApp = renderToString(
		<div>
			<Home />
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
app.listen(8082, () => {
	console.log(`Server running on port: 8082`);
});