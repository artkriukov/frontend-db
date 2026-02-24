// Дан произвольный url вида - <https://purpleschool.ru/course/javascript>

// Нужно сделать функцию, которая выводит в консоль:
// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

const url = "https://purpleschool.ru/course/javascript"

function getUrlParts(url) {
  const [protocol, _, domen, ...otherPath] = url.split("/")
  const path = otherPath.join('/')

  if (protocol === 'https:' || protocol === 'http:') {
    console.log(`Protocol: ${protocol}, domen: ${domen}, path: /${path}` );
  } else {
    console.log('Неверный URL');
  }
}

getUrlParts(url)
