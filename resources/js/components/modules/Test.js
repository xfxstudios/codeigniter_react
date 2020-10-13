import React from 'react';
import ReactDOM from 'react-dom';

const Test = () => {
	return (
			<div id="container">
				<h1>Welcome to CodeIgniter 3 with React JS!</h1>
			
				<div id="body">
					<p>Hello, I am a react component with JSX, if you are seeing me, you followed the instructions correctly:</p>
			
					<p>To start clone this repository</p>
					<code>git clone https://github.com/xfxstudios/codeigniterreact.git</code>
			
					<p>Then on your console, run the node installer:</p>
					<code>npm install</code>
			
					<p>then to run or compile:</p>
					<code>npm run dev</code>
			
					<p>then to run or compile:</p>
					<code>npm run dev</code>
			
					<p>You can add your components in the path:</p>
					<code>resources/js/components/modules</code>

					<p>preinstalled packages:</p>
					<ul>
						<li>"cross-env": "^7.0.2"</li>
						<li>"@material-ui/core": "^4.11.0"</li>
						<li>"@material-ui/icons": "^4.9.1"</li>
						<li>"@material-ui/lab": "^4.0.0-alpha.56"</li>
						<li>"axios-react": "^2.0.2"</li>
						<li>"flare-react": "^1.0.7"</li>
						<li>"moment": "^2.27.0"</li>
						<li>"react-bootstrap": "^1.3.0"</li>
						<li>"react-content-loader": "^5.1.1"</li>
						<li>"react-moment": "^0.9.7"</li>
						<li>"react-select-2": "^2.0.11"</li>
						<li>"sweetalert": "^2.1.2"</li>
						<li>"uikit-react": "^3.0.20"</li>
						<li>"laravel-mix": "^5.0.7</li>
						<li>"jquery": "^3.5.1"</li>
					</ul>

				</div>
			</div>
	)
}

const container = document.getElementById('test');
if(container){
	ReactDOM.render(<Test/>,container);
}
