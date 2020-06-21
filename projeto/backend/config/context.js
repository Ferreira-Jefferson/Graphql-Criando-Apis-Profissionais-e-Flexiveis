const jwt = require('jwt-simple')

module.exports = async ({ req }) => {  
  //Only in development
  await require('./simularUsuarioLogado')(req);

  const auth = req.headers.authorization;
  const token = auth && auth.substring(7);

  let usuario = null;
  let admin = false;

  if (token) {
    try {
      let conteudoToken = jwt.decode(token, process.env.APP_AUTH_SECRET);
      
      if (new Date(conteudoToken.exp * 1000) > new Date())
        usuario = conteudoToken
      
    } catch(e){}
  }

  if (usuario && usuario.perfis)
    admin = usuario.perfis.includes('admin');
  
  const err = new Error('Acesso negado!');

  return {
    usuario,
    admin,
    validarUsuario: () => { if (!usuario) throw err; },
    validarAdmin: () => { if (!admin) throw err; }
  }
}