import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface RequestWithUser {
  user?: {
    sub: string;
    email: string;
    role: string;
  };
}

export const CurrentUser = createParamDecorator((data: keyof NonNullable<RequestWithUser['user']> | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<RequestWithUser>();
  if (!request.user) {
    return null;
  }

  return data ? request.user[data] : request.user;
});
