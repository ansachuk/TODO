import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import { selectTodos } from "../../redux/TodoSlice";

import Todo from "../Todo/Todo";

import css from "./Main.module.scss";

export default function Main() {
	const todos = useSelector(selectTodos);

	return (
		<main>
			<Container className="mt-4">
				<h1 className={css.title}>TODO!</h1>
				<Row xs={1} md={2} lg={3} xl={4} className="g-4">
					{todos.map(todo => (
						<Todo key={todo.id} todo={todo} />
					))}
				</Row>
			</Container>
		</main>
	);
}
