import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "../@types/types";

interface IInitialState {
	todos: ITodo[];
}

const initialState: IInitialState = {
	todos: [
		{ name: "Test assignment", desc: "Finish test task.", isTodoFinished: false, id: "1" },
		{ name: "LinkedIn", desc: "Make 2 post in LinkedIn per week.", isTodoFinished: false, id: "2" },
	],
};

const TodoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: {
			reducer(state, action: PayloadAction<ITodo>) {
				state.todos.push(action.payload);
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
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		updateTodo: (state, action: PayloadAction<ITodo>) => {
			const index = state.todos.findIndex(todo => todo.id === action.payload.id);

			state.todos[index] = { ...state.todos[index], ...action.payload };
		},
	},
});

export const selectTodos = (state: IInitialState) => state.todos;

export const { addTodo, deleteTodo, updateTodo, toggleTodoStatus } = TodoSlice.actions;

export default TodoSlice.reducer;
