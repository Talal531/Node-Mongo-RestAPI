import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../modules/users/user.model';

const localOpt = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(localOpt, async(email, password, done) => {
  try{
    const user = await User.findOne({ email });
    if(!user){
      return done(null, false);
    } else if(!user.authenticateUser(password)) {
      return done(null, false);
    }

    return done(null, user);

  } catch(err){
    return done(e, false)
  }
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', { session: false })
