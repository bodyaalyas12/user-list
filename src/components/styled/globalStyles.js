import { createGlobalStyle } from 'styled-components'
import bg from '../../images/bg.jpg'

export default createGlobalStyle`
	html * {
		font-family: 'Roboto', sans-serif !important;
	}
	html {
		box-sizing: border-box;
		font-size: 16px;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	body{
		background-image: url(${bg});
	}
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ol,
	ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	ol,
	ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}
	input{
		outline-color:transparent;
	}
`
