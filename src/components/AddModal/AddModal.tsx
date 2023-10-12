import { Modal } from "react-bootstrap";
import ModalForm from "../ModalForm/ModalForm";
import { addTodo } from "../../redux/TodoSlice";

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
			<Modal.Body>
				<ModalForm func={addTodo} setIsModalOpen={setIsModalOpen} />
			</Modal.Body>
		</Modal>
	);
}
