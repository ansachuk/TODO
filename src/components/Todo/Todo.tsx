import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/TodoSlice";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ITodo } from "../../@types/types";
import icons from "../../icons/sprite.svg";
import css from "./Todo.module.scss";

type Props = {
	todo: ITodo;
};

export default function Todo({ todo: { name, desc, isTodoFinished, id } }: Props) {
	const disp = useDispatch();
	return (
		<Col>
			<Card bg="yellow" border="danger">
				<Card.Body>
					<Card.Title color="light">{name}</Card.Title>
					<Card.Text>{desc}</Card.Text>

					<div className={css.wrapper}>
						<Button
							onClick={() => {
								disp(deleteTodo(id));
							}}
							variant="success"
						>
							<svg width="20" height="20">
								<use href={icons + "#checkmark"}></use>
							</svg>
						</Button>

						<Button
							onClick={() => {
								disp(deleteTodo(id));
							}}
							variant="warning"
						>
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
				</Card.Body>
			</Card>
		</Col>
	);
}
