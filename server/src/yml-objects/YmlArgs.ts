import { YmlArgument } from "./YmlArgument";

export class YmlArgs {
  public arityMin: number;
  public arityMax: number;
  public namedArguments: boolean;
  public arguments: YmlArgument[];
}
