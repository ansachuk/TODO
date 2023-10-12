import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";

import { addTodo, updateTodo } from "../../redux/TodoSlice";

import css from "./ModalForm.module.scss";

type Props = {
	func: typeof addTodo | typeof updateTodo;
	setIsModalOpen: (value: boolean) => void;
	name?: string;
	desc?: string;
	id?: string;
	isTodoFinished?: boolean;
};

export default function ModalForm({ name = "", desc = "", id = "", setIsModalOpen, isTodoFinished = false, func }: Props) {
	const disp = useDispatch();
	const [todoName, setTodoName] = useState(name);
	const [todoDesc, setTodoDesc] = useState(desc);

	const onInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.currentTarget;

		switch (name) {
			case "todoName":
				setTodoName(value);
				break;

			case "todoDesc":
				setTodoDesc(value);
				break;

			default:
				throw new Error("This type is not availeble!");
		}
	};

	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const todoName = ((e.currentTarget as HTMLFormElement).todoName as HTMLInputElement).value;
		const todoDesc = ((e.currentTarget as HTMLFormElement).todoDesc as HTMLTextAreaElement).value;

		if (todoDesc && todoName) {
			disp(
				func({
					name: todoName,
					desc: todoDesc,
					id: id || nanoid(),
					isTodoFinished: isTodoFinished || false,
				}),
			);
			setIsModalOpen(false);
		}
	};

	return (
		<form className={css.form} onSubmit={handleOnSubmit}>
			<label htmlFor="todoName">
				Name
				<input required onChange={onInputChange} value={todoName} id="todoName" name="todoName" type="text" />
			</label>
			<label htmlFor="todoDesc">
				Description
				<textarea required rows={8} onChange={onInputChange} id="todoDesc" value={todoDesc} name="todoDesc" />
			</label>
			<div className={css.wrapper}>
				<Button variant="secondary" onClick={() => setIsModalOpen(false)}>
					Close
				</Button>
				<Button variant="primary" type="submit">
					Save Changes
				</Button>
			</div>
		</form>
	);
}
