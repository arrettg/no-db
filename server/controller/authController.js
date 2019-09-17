const bcrypt = require("bcryptjs");

module.exports = {
  registerUser: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const result = await db.get_user([email]);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).json("email in use");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registerUser = await db.register_user([email, hash]);
    const user = registerUser[0];
    req.session.users = {
      email: user.email,
      id: user.user_id
    };
    return res.status(201).json(req.session.user);
  },

  userLogin: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.get_user([email]).catch(err => console.log(err));
    const user = foundUser[0];

    if (!user) {
      return res.status(401).json("email or password incorrect");
    }
    const isAuth = await bcrypt.compare(password, user.password);
    if (isAuth === false) {
      return res.status(403).json("email or password incorrect");
    } else {
      req.session.user = {
        id: user.user_id,
        email: user.email
      };
    }
    console.log(req.session.user);
    res.json(req.session.user);
  }
};
