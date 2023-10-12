import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../../redux/TodoSlice";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import UpdateModal from "../UpdateModal/UpdateModal";

import { ITodo } from "../../@types/types";
import icons from "../../icons/sprite.svg";
import css from "../Main/Main.module.scss";

type Props = {
	todo: ITodo;
};

type statusConfig = {
	icon: "#checkmark" | "#done";
	bg: "success" | "light";
	text: "dark" | "light";
};

export default function Todo({ todo: { name, desc, isTodoFinished, id } }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const disp = useDispatch();

	const status: statusConfig = {
		icon: isTodoFinished ? "#checkmark" : "#done",
		bg: isTodoFinished ? "success" : "light",
		text: !isTodoFinished ? "dark" : "light",
	};
	return (
		<Col>
			<Card text={status.text} bg={status.bg}>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{desc}</Card.Text>

					<div className={css.wrapper}>
						<Button
							onClick={() => {
								disp(toggleTodoStatus(id));
							}}
							variant="success"
						>
							<svg width="20" height="20">
								<use href={icons + status.icon}></use>
							</svg>
						</Button>

						<Button onClick={() => setIsModalOpen(true)} variant="warning">
							<svg width="20" height="20">
								<use href={icons + "#pencil"}></use>
							</svg>
						</Button>

						<Button
							onClick={() => {
								disp(deleteTodo(id));
							}}
							variant="danger"
						>
							<svg width="20" height="20">
								<use href={icons + "#cross"}></use>
							</svg>
						</Button>
					</div>
					<UpdateModal isTodoFinished={isTodoFinished} id={id} name={name} desc={desc} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				</Card.Body>
			</Card>
		</Col>
	);
}
