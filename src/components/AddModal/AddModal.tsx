import { Button, Modal } from "react-bootstrap";

type Props = {
	isModalOpen: boolean;
	setIsModalOpen(state: boolean): void;
};

export default function AddModal({ isModalOpen, setIsModalOpen }: Props) {
	return (
		<Modal backdrop={true} show={isModalOpen} onHide={() => setIsModalOpen(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Add new TODO!</Modal.Title>
			</Modal.Header>
			<Modal.Body>Form</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setIsModalOpen(false)}>
					Close
				</Button>
				<Button variant="primary" onClick={() => setIsModalOpen(false)}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
