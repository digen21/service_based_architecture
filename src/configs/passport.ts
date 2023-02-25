// import passportJwt, { Strategy, ExtractJwt } from 'passport-jwt';
// import { Express, RequestHandler } from 'express';
// import passport from 'passport';
// import UserService from '../services/User/UserService';

// const options = {
//     secretOrKey: "jwtsecret",
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// }


// export default function jwtPassportAuth(app: any) {
//     passport.use(new Strategy(options, async (payload, done) => {
//         if (!payload) {
//             console.log("Unauthorized....");
//             return done(null, false);
//         }
//         console.log({ payload: payload });
//         const userService = new UserService();

//         const user = await userService.getById(payload)
//         return done(null, user || false);
//     })
//     );

//     const handleReq: RequestHandler = (req, res, next) => {
//         const token = options.jwtFromRequest(req);
//         console.log(token);

//         if (token) {
//             passport.authenticate("jwt", { session: false })(req, res, next);
//         } else {
//             next();
//         }
//     }
//     app.use(handleReq);
// }