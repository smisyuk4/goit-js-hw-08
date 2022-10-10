// HTML містить < iframe > з відео для Vimeo плеєра. 
// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і,
// після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.


// 1. Ознайомся з документацією бібліотеки Vimeo плеєра.
// https://github.com/vimeo/player.js/#vimeo-player-api

// 2. Додай бібліотеку як залежність проекту через npm.

// 3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, 
// https://github.com/vimeo/player.js/#pre-existing-player
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.

// 4. Вивчи документацію методу on() і почни відстежувати подію 
// timeupdate - оновлення часу відтворення.
// https://github.com/vimeo/player.js/#onevent-string-callback-function-void


// 5. Зберігай час відтворення у локальне сховище. 
// Нехай ключем для сховища буде рядок "videoplayer-current-time".

// 6. Під час перезавантаження сторінки скористайся 
// методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror


// 7. Додай до проекту бібілотеку lodash.throttle і зроби так, 
// щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
// https://lodash.com/


