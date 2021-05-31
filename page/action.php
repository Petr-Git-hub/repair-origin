<?php
$msg_box = ""; // в этой переменной будем хранить сообщения формы
$errors = array(); // контейнер для ошибок
// проверяем корректность полей
if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
if($_POST['user_phone'] == "")   $errors[] = "Поле 'Номер телефона' не заполнено!";
//if($_POST['text_comment'] == "") $errors[] = "Поле 'Какая у Вас неисправность?' не заполнено!";

// если форма без ошибок
if(empty($errors)){
    // собираем данные из формы
    $message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
    $message .= "Номер телефона пользователя: " . $_POST['user_phone'] . "<br/>";
    $message .= "Описание неисправности: " . $_POST['text_comment'];
    send_mail($message); // отправим письмо
    // выведем сообщение об успехе
    $msg_box = "<span style='color: green;'>Заявка успешно отправлена!</span>";

}else{
    // если были ошибки, то выводим их
    $msg_box = "";
    foreach($errors as $one_error){
        $msg_box .= "<span style='color: red;'>$one_error</span>";
    }
}

// делаем ответ на клиентскую часть в формате JSON
echo json_encode(array(
    'result' => $msg_box
));


// функция отправки письма
function send_mail($message){
    // почта, на которую придет письмо
    $mail_to = "Yar.muzyka@gmail.com";
    // тема письма
    $subject = "Заявка с сайта iFix";

    // заголовок письма
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: iFix Workshop <robot@mysite.ru>\r\n"; // от кого письмо

    // отправляем письмо
    mail($mail_to, $subject, $message, $headers);
}

?>

