module.exports = function (api) { //exportando uma função anonima, que é chamada pelo babel quando esta sendo executado
  api.cache(true);  //funcao para armazenar em cache as configurações paar melhorar o desempenhodurante a compilação
  return {
    presets: ['babel-preset-expo'], // agrupam plugins para transformar o código em diferentes versões do JavaScript
    env: {  //permite definir quais versoes de navegadores ou ambientes eu desejo suportar
      production: {
        plugins: ['react-native-paper/babel'],
      }
    }
  };
};
