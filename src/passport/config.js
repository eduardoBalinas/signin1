const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const pool = require('../database/connection');

passport.use('signin' , new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username , password , done) => {
    const rows = await pool.query('SELECT * FROM Director WHERE username = ?' , [username]);
    if(rows.length > 0){
        const user = rows[0];
         
        if(password == user.password){
            done(null , true);
        }else{
            done(null , false)
        }
    }else{
        done(null , false)
    }
}));

passport.serializeUser((user , done) => {
    done(null , user._id)
})
passport.deserializeUser(async (id , done) => {
    const rows = await pool.query('SELECT * FROM Director WHERE id = ?' , [id]);
    if(rows.length>0){
        done(null , rows[0]);
    }
});