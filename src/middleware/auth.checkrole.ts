import { RequestHandler } from "express";

export const checkRole = (roles: Array<string>): RequestHandler => {
  return (req, res, next) => {
    const user = res.locals.user;
    console.log(user)
    if (!user) {
      res.status(401).json({ message: "Unauthorized: user not found in token" });
      return; // return void, không return Response
    }
    // ["admin"]
    if (roles.includes(user.role)) {
      return next(); // gọi next nếu role hợp lệ
    }

    res.status(403).json({ message: "Forbidden: insufficient role" });
    return;
  };
  
};
