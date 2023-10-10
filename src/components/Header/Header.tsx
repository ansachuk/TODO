import { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AddModal from "../AddModal/AddModal";

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Navbar fixed="top" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand>TODO!</Navbar.Brand>
					<Button onClick={() => setIsModalOpen(true)} size="lg" variant="outline-success">
						Add
					</Button>
					<AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				</Container>
			</Navbar>
		</>
	);
}
