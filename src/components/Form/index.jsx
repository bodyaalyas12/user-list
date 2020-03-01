import { Button, ClickAwayListener } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import gray from '../../images/color-swatch.jpeg'
import { Container, FlexBlock } from '../styled'
import Form from './Form'

const Blur = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-image: url(${gray});
	opacity: 0.7;
	filter: blur(8px);
	z-index: 10;
`

const FormWrap = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)
	const blurTransition = useTransition(isModalOpened, null, blurStyleTransition)
	const transition = useTransition(isModalOpened, null, styleTransition)
	return (
		<div>
			{blurTransition.map(
				({ item, key, props }) =>
					item && (
						<animated.div key={key} style={props}>
							<Blur />
						</animated.div>
					)
			)}
			<Container>
				<FlexBlock m={[20, 0]} justifyEnd>
					<Button variant="contained" onClick={() => setIsModalOpened(true)} color="primary">
						Add new
					</Button>
				</FlexBlock>
			</Container>
			{transition.map(
				({ item, key, props }) =>
					item && (
						<ClickAwayListener key={key} onClickAway={() => setIsModalOpened(false)}>
							<animated.div style={props}>
								<FlexBlock p={[10, 20]}>
									<CloseIcon style={{ cursor: 'pointer' }} onClick={e => setIsModalOpened(false)} />
								</FlexBlock>
								<Form />
							</animated.div>
						</ClickAwayListener>
					)
			)}
		</div>
	)
}

const styleTransition = {
	from: {
		transform: 'translateX(100%)',
		opacity: 0,
		zIndex: 30,
		position: 'fixed',
		right: 0,
		width: '40%',
		background: '#ffffff',
		paddingTop: '30px',
		minWidth: '261px',
		height: '100%',
		top: '0'
	},
	enter: {
		opacity: 1,
		transform: 'translateX(0%)'
	},
	leave: {
		opacity: 0,
		transform: 'translateX(100%)'
	},
	config: {
		ease: 'easeInOutCirc',
		duration: 400
	}
}

const blurStyleTransition = {
	from: {
		opacity: 0
	},
	enter: {
		opacity: 1
	},
	leave: {
		opacity: 0
	}
}

export default FormWrap
