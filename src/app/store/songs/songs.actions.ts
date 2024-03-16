export class GetSongs {
  static readonly type = '[Songs] Get Songs';
}

export class getError {
  static readonly type = '[Songs] Error Songs';
}

export class getSuccess {
  static readonly type = '[Songs] Success Songs';
}

export class SelectSong {
  static readonly type = '[Songs] Select Song';
  constructor(public songId: string) {}
}

export class DeleteSong {
  static readonly type = '[Songs] Delete Song';
  constructor(public songId: string) {}
}
