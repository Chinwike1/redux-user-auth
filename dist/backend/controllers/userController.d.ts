import { RegisterBody, LoginBody } from '../types/index.js';
declare const registerUser: import("express").RequestHandler<{}, any, RegisterBody, import("qs").ParsedQs, Record<string, any>>;
declare const loginUser: import("express").RequestHandler<{}, any, LoginBody, import("qs").ParsedQs, Record<string, any>>;
declare const getUserProfile: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export { registerUser, loginUser, getUserProfile };
//# sourceMappingURL=userController.d.ts.map