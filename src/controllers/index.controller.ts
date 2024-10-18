import * as Koa from "koa";

export class IndexController {
  public static async getPublic(ctx: Koa.Context) {
    ctx.body = 'Hello World!';
  }

  public static async getProtected(ctx: Koa.Context) {
    ctx.body = 'Hello protected world';
  }
}
