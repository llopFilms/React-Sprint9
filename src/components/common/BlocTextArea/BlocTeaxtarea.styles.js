import styled from "styled-components";

export const Label = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 0.25rem;
	align-items: start;
	font-size: 1.1rem;

	&:focus-within {
		color: ${({ theme }) => theme.colors.titol};
	}

	textarea {
		width: 100%;
		min-height: 10rem;
		background: ${({ theme }) => theme.colors.fonsFosc};
		border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
		border-radius: 0.5rem;
		padding: 0.5rem;

		&:focus {
			border-color: ${({ theme }) => theme.colors.voraLilaIntens};
			color: ${({ theme }) => theme.colors.titol};
		}

		&[readOnly],
		&[defaultValue] {
			color: ${({ theme }) => theme.colors.missatge};
		}
	}
`;
