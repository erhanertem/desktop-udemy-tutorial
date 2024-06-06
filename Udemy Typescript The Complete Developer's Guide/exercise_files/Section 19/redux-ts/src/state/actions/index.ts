import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
	type: ActionType.SEARCH;
}
interface SearchRepositoriesSuccessAction {
	type: ActionType.SUCCESS;
	payload: string[];
}
interface SearchRepositoriesErrorAction {
	type: ActionType.ERROR;
	payload: string;
}
export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;
