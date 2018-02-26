export class ListResponse<T> {
  readonly docs: T[];
  readonly limit: number;
  readonly page: number;
  readonly pages: number;
  readonly total: number;
}
