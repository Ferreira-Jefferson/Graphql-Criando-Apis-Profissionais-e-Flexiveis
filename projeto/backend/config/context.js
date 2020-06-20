module.exports = async ({ req }) => {  
  //Only in development
  await require('./simularUsuarioLogado')(req);

  const auth = req.headers.authorization;
}