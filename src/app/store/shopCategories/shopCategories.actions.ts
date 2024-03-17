export class GetCategories {
  static readonly type = '[ShopCategories] Get Categories';
}

export class getError {
  static readonly type = '[ShopCategories] Error Shop Categories';
}

export class getSuccess {
  static readonly type = '[ShopCategories] Success Shop Categories';
}

export class SelectCategory {
  static readonly type = '[ShopCategories] Select Shop Category';
  constructor(public songId: string) {}
}

export class DeleteCategory {
  static readonly type = '[ShopCategories] Delete Shop Category';
  constructor(public songId: string) {}
}
