<?php

$email = "pismo@gurukovki.ru";
$title = "=?utf-8?b?" . base64_encode( htmlspecialchars("ГуруКовки - Новая заявка") ) . "?=";

if(empty($_POST['phone']))
	exit();

$name = @htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$text = htmlspecialchars($_POST['text']);

$ip = $_SERVER["REMOTE_ADDR"];
$date = date('d.m.Y H:i:s');

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
//$headers .= 'From: milok@murlyka.com'. "\r\n";

$html = 
'<table>
	<tr>
		<td><b>IP:</b></td>
		<td>'.$ip.'</td>
	</tr>
	<tr>
		<td><b>Дата:</b></td>
		<td>'.$date.'</td>
	</tr>
	<tr>
		<td><b>Имя:</b></td>
		<td>'.$name.'</td>
	</tr>
	<tr>
		<td><b>Телефон:</b></td>
		<td>'.$phone.'</td>
	</tr>
	<tr>
		<td><b>Название товара:</b></td>
		<td>'.$text.'</td>
	</tr>
</table>';

if(mail($email, $title, $html, $headers))
	echo "Заявка удачно отправлена!";
else
	echo "Ошибка";