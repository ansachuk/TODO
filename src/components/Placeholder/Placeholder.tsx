import { useState } from "react";

import css from "./Placeholder.module.scss";
import AddModal from "../AddModal/AddModal";
import { Button } from "react-bootstrap";

export default function Placeholder() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<div className={css.container}>
				<span>You have no TODO :(</span>
				<Button onClick={() => setIsModalOpen(true)} size="lg" variant="outline-success">
					Add
				</Button>
			</div>
		</>
	);
}
