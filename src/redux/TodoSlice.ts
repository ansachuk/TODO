import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { ITodo } from "../@types/types";

interface IInitialState {
	todos: ITodo[];
}

const initialState: IInitialState = {
	todos: [
		{ name: "Test assignment", desc: "Finish test task.", isTodoFinished: false, id: "1" },
		{ name: "LinkedIn", desc: "Make 2 post in LinkedIn per week.", isTodoFinished: true, id: "2" },
		{ name: "Update CV", desc: "Add more pet-projects", isTodoFinished: false, id: "3" },
	],
};

const TodoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: {
			reducer(state, action: PayloadAction<ITodo>) {
				state.todos.push(action.payload);
				Notify.success("TODO has added!");
			},
			prepare({ name, desc, isTodoFinished, id }: ITodo): Pick<PayloadAction<ITodo>, "payload"> {
				return {
					payload: {
						name,
						desc,
						isTodoFinished,
						id,
					},
				};
			},
		},
		toggleTodoStatus: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find(todo => todo.id === action.payload);

			if (todo) {
				todo.isTodoFinished = !todo.isTodoFinished;

				if (todo.isTodoFinished) {
					return Notify.success("Complete!");
				} else {
					return Notify.failure("Incomplete!");
				}
			}

			return Notify.failure("Error!");
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
			return Notify.failure("Deleted!");
		},
		updateTodo: (state, action: PayloadAction<ITodo>) => {
			const index = state.todos.findIndex(todo => todo.id === action.payload.id);

			state.todos[index] = { ...state.todos[index], ...action.payload };
			return Notify.warning("Updated!");
		},
	},
});

export const selectTodos = (state: IInitialState) => state.todos;

export const { addTodo, deleteTodo, updateTodo, toggleTodoStatus } = TodoSlice.actions;

export default TodoSlice.reducer;
