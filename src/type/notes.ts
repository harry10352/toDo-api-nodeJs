interface INotesType {
  title: string;
  desc: string;
  type: string;
}

interface ReqtHeadersType {
  userid: string;
  authorization: string;
}
interface ReqtParamsType {
  noteid?: string;
}

export { INotesType, ReqtHeadersType, ReqtParamsType };
