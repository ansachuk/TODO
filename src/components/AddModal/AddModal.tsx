import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { updateTodo } from "../../redux/TodoSlice";

type Props = {
	isModalOpen: boolean;
	setIsModalOpen(state: boolean): void;
};

export default function AddModal({ isModalOpen, setIsModalOpen }: Props) {
	const disp = useDispatch();

	const handleAddTodo = () => {
		disp(updateTodo({ name: "test 1", desc: "dest test", id: "Ksh9q3BpxJ77VR71zDQVV", isTodoFinished: false }));

		setIsModalOpen(false);
	};

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
				<Button variant="primary" onClick={handleAddTodo}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
