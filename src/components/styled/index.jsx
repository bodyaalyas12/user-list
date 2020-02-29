import styled from 'styled-components'
import { paddingMixin, marginMixin, MaxHeightMixin, widthMixin } from './styledMixins'
import { ReactSVG } from 'react-svg'
import Button from '@material-ui/core/Button'

export const Column = styled.div`
    display: block;
    flex: 1 1 auto;
    
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    
    ${({ auto }) =>
			auto &&
			`
        flex: 0 0 auto;
    `}

    ${({ width }) =>
			width <= 12 &&
			`
        flex: 0 0 ${(width * 100) / 12}%;
        max-width: ${(width * 100) / 12}%;
    `}
    
    @media (min-width: 1px) {
        display: block; 
        ${({ sm, hideSm }) => {
					if (hideSm) {
						return `display: none;`
					} else {
						return (
							sm <= 12 &&
							`
                    flex: 0 0 ${(sm * 100) / 12}%;
                    max-width: ${(sm * 100) / 12}%;       
                `
						)
					}
				}}
    }

    @media (min-width: 768px) {
        display: block;
        ${({ md, hideMd }) => {
					if (hideMd) {
						return `display: none`
					} else {
						return (
							md <= 12 &&
							`
                    flex: 0 0 ${(md * 100) / 12}%;
                    max-width: ${(md * 100) / 12}%;
                `
						)
					}
				}}
    }

    @media (min-width: 992px) {
        display: block;
        ${({ lg, hideLg }) => {
					if (hideLg) {
						return `display: none;`
					} else {
						return (
							lg <= 12 &&
							`
                    flex: 0 0 ${(lg * 100) / 12}%;
                    max-width: ${(lg * 100) / 12}%;
                `
						)
					}
				}}
    }

    @media (min-width: 1200px) {
        display: block;
        ${({ xl, hideXl }) => {
					if (hideXl) {
						return `display: none`
					} else {
						return (
							xl <= 12 &&
							`
                    flex: 0 0 ${(xl * 100) / 12}%;
                    max-width: ${(xl * 100) / 12}%;
                `
						)
					}
				}}
    }

    ${paddingMixin}
    ${marginMixin}
    ${MaxHeightMixin}
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    ${({ noGap }) =>
			noGap &&
			`
        margin-left: 0; margin-right: 0;
        & > ${Column} {
            padding-left: 0;
            padding-right: 0;
        }     
    `}
    ${({ alignCenter }) => alignCenter && `align-items: center;`}
    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}
    ${({ alignStart }) => alignStart && `align-items: start;`}
    ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}
    ${({ justifyBetween }) => justifyBetween && `justify-content: space-between;`}
    ${({ justifyEvenly }) => justifyEvenly && `justify-content: space-evenly;`}
    ${({ justifyEnd }) => justifyEnd && `justify-content: flex-end;`}
    ${({ grow }) => grow && `flex-grow:1;`}
    ${({ basis }) => basis && `flex-basis:${basis};`}
    ${({ justifyStart }) => justifyStart && `justify-content: flex-start;`}
    ${({ rowReverse }) => rowReverse && `flex-direction: row-reverse;`}
    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}
    ${({ column }) => column && `flex-direction: column;`}
    ${({ height }) =>
			height >= 0 &&
			height <= 100 &&
			`
            height: ${height}%;
        `}
    ${({ width }) =>
			width >= 0 &&
			width <= 100 &&
			`
         width: ${width}%;
        `}
    ${({ wAbs }) => wAbs && `width:${wAbs}px`}

    ${({ background }) => background && `background:${background};`}
    ${({ position }) => position && `position:${position};`}
    ${paddingMixin}
    ${marginMixin}
    ${MaxHeightMixin}
`
export const EnhancedReactSVG = styled(ReactSVG)`
	display: flex;
	align-items: center;
    justify-content:center;
	div {
		height: fit-content;
		display: flex;
		align-items: center;
	}
    ${({ cursor }) => cursor && `cursor:pointer;`}
	${paddingMixin}
	${marginMixin}
`
export const FlexBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    ${({ alignCenter }) => alignCenter && `align-items: center;`}
    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}
    ${({ alignStart }) => alignStart && `align-items: start;`}
    ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}
    ${({ justifyBetween }) => justifyBetween && `justify-content: space-between;`}
    ${({ justifyEvenly }) => justifyEvenly && `justify-content: space-evenly;`}
    ${({ justifyEnd }) => justifyEnd && `justify-content: flex-end;`}
    ${({ grow }) => grow && `flex-grow:1;`}
    ${({ basis }) => basis && `flex-basis:${basis};`}
    ${({ justifyStart }) => justifyStart && `justify-content: flex-start;`}
    ${({ rowReverse }) => rowReverse && `flex-direction: row-reverse;`}
    ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}
    ${({ column }) => column && `flex-direction: column;`}
    ${({ height }) =>
			height >= 0 &&
			height <= 100 &&
			`
            height: ${height}%;
        `}
    ${({ width }) =>
			width >= 0 &&
			width <= 100 &&
			`
         width: ${width}%;
        `}
    ${({ wAbs }) => wAbs && `width:${wAbs}px`}

    ${({ background }) => background && `background:${background};`}
    ${({ position }) => position && `position:${position};`}
    ${paddingMixin}
    ${marginMixin}
    ${MaxHeightMixin}
`
export const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	@media (max-width: 575.98px) {
		width: 100%;
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		max-width: 540px;
	}

	@media (min-width: 768px) and (max-width: 991.98px) {
		max-width: 720px;
	}
	@media (min-width: 992px) and (max-width: 1199.98px) {
		max-width: 960px;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`
