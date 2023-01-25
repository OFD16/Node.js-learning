win > powersheel > 
psql -d postgres -U postgres > admin > enter

kullanıcı oluşturma
ilk admin kullanıcı adı sonraki şifre oluyor
CREATE ROLE admin WITH LOGIN PASSWORD 'admin';

kullanıcıları kontrol etme 
\du

kullanıcıya yetki rol verme
ALTER ROLE admin CREATEDB;

Elimzideki veritabanalrını listelemek için:
\list

çıkış yapmak için
\q

ekranı temizleme
clear

Oluşturulan role en başında giriş yapmak için:
psql -d postgres -U userName
psql -d postgres -U admin

Veritabanı oluşturma::
CREATE DATABASE databaseName;
CREATE DATABASE actors;

Veritabanına bağlanma:
\c databaseName
\c actors
Böylece direk postrsql komutlaarıyla veritabanında oynamalar yapabiliriz.