// Написать 2 функции:

// шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному 
// алгоритму и возвращает строку.

// проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном 
// пароле и возвращает true, если он совпадает со втором паролем и false, если нет.

// crypto(‘password’) -> ssapdorw
// check(‘ssapdorw’, ‘password’) -> true
// check(‘ssapdorw’, ‘wrong’) -> false

const crypto = (psw) => {
  let chars = psw.split('');  
  chars.reverse();            
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  return chars.join('');      
};

const check = (cryptoPsw, psw) => {
  let chars = cryptoPsw.split('');  
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  chars.reverse();
  return chars.join('') === psw;
};

const cryptoPsw = crypto("password");  
console.log(cryptoPsw);                
console.log(check(cryptoPsw, "password"));  
console.log(check(cryptoPsw, "wrong"));    
