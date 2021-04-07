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
}

export type TodoList = [TodoDetail] | [];