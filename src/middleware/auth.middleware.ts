import { Unkey } from "@unkey/api";
import * as Koa from "koa";
import * as dotenv from 'dotenv';

dotenv.config(); 

export const withAuth = (opts: { permission: string }) => {
  const unkey = new Unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
  });

  return async (ctx: Koa.Context, next: Koa.Next) => {
    const key = ctx.headers["authorization"]?.split(" ").at(1);
    if (!key) {
      console.log("no api key found");
      ctx.status = 401;
      ctx.body = "unauthorized";
      return;
    }

    const { result, error } = await unkey.keys.verify({
      apiId: process.env.UNKEY_API_ID!,
      key,
      authorization: { permissions: opts.permission },
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!result.valid) {
      console.log("forbidden", result.code);
      ctx.status = 403;
      ctx.body = "forbidden";
      return;
    }

    await next();
  };
};
