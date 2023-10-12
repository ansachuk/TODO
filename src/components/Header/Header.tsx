import { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AddModal from "../AddModal/AddModal";

import icons from "../../icons/sprite.svg";

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<header>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand>
						<svg width="40" height="40">
							<use href={icons + "#checkbox"}></use>
						</svg>
					</Navbar.Brand>
					<Button onClick={() => setIsModalOpen(true)} size="lg" variant="outline-success">
						Add
					</Button>
					<AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				</Container>
			</Navbar>
		</header>
	);
}
