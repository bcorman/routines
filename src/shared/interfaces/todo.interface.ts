enum LooseDate {
  today = "TODAY",
  tomorrow = "TOMORROW",
  someday = "SOMEDAY",
  anytime = "ANYTIME",
}
export interface TodoDetail {
  text: string;
  dueDate?: LooseDate | Date;
  owner?: string;
  complete: Boolean;
  completedOn?: Date;
  id: number;
}

export type TodoList = [TodoDetail] | [];
