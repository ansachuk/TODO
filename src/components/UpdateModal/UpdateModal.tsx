import { Modal } from "react-bootstrap";

import { updateTodo } from "../../redux/TodoSlice";
import ModalForm from "../ModalForm/ModalForm";

type Props = {
	isModalOpen: boolean;
	setIsModalOpen(state: boolean): void;
	name?: string;
	desc?: string;
	id?: string;
	isTodoFinished?: boolean;
};

export default function UpdateModal({ name = "", desc = "", id = "", isModalOpen, isTodoFinished = false, setIsModalOpen }: Props) {
	return (
		<Modal backdrop={true} show={isModalOpen} onHide={() => setIsModalOpen(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Update TODO</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ModalForm isTodoFinished={isTodoFinished} id={id} name={name} desc={desc} func={updateTodo} setIsModalOpen={setIsModalOpen} />
			</Modal.Body>
		</Modal>
	);
}
