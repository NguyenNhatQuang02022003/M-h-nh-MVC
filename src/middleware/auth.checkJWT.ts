import { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "../config/db.config";

export const checkJwt: RequestHandler = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized: missing or malformed token" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const jwtPayload = jwt.verify(token, config.jwtSecret) as any;

    res.locals.jwtPayload = jwtPayload;
    res.locals.user = {
      id: jwtPayload.userId,
      username: jwtPayload.username,
      role: jwtPayload.role,
      email: jwtPayload.email,
    };

    const { userId, username, role, email } = jwtPayload;
    const newToken = jwt.sign({ userId, username, role, email }, config.jwtSecret, {
      expiresIn: "1h"
    });
    res.setHeader("token", newToken);

    return next(); // ✅ bắt buộc gọi return next()
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: invalid token" });
    return;
  }
};
