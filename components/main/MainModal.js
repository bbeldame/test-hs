import { useEffect, useState } from "react";

import Button from "../button/Button";

import * as Styled from "./__styles__/MainModal.styles";

const MainModal = ({ onModalClose }) => {
	const [form, setForm] = useState({ email: "", message: "" });

	const maxMessageLength = 225;

	useEffect(() => {
		const closeModal = ({ key }) => {
			key === "Escape" && onModalClose();
		};
		document.addEventListener("keydown", closeModal);

		return () => document.removeEventListener("keydown", closeModal);
	}, []);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
	};

	return (
		<Styled.Root id="modal">
			<Styled.Container>
				<Styled.CloseButton src="/images/close.svg" onClick={onModalClose} />
				<Styled.Title>Lorem Ipsum, Dolor Sit Amet.</Styled.Title>
				<Styled.Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex
					nunc, molestie.
				</Styled.Description>
				<form onSubmit={handleSubmit}>
					<Styled.FormField>
						<label for="email">Email</label>
						<input
							value={form.email}
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							placeholder="exemple@coucou.fr"
							required
							onChange={handleChange}
						/>
					</Styled.FormField>
					<Styled.FormField>
						<label for="message">Message</label>
						<textarea
							value={form.message}
							name="message"
							id="message"
							maxLength={maxMessageLength}
							placeholder="Hint text"
							required
							onChange={handleChange}
						/>
						<Styled.Count>{`${form.message.length} / ${maxMessageLength}`}</Styled.Count>
					</Styled.FormField>
					<Button onSubmit={handleSubmit}>Call to action</Button>
					<Styled.Information>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						ex nunc, molestie.
					</Styled.Information>
				</form>
			</Styled.Container>
		</Styled.Root>
	);
};

export default MainModal;
