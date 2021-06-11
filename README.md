# Projeyi ayaða kaldýrmak için;

npm i

Serveri ayaða kaldýrmak için : graphql-faker --open

Projeyi çalýþtýrmak için;

ng serve --open

## Proje içerisinde kullanýlan araç ve teknolojiler

Front End Framework => Framework olarak React tercih edildi. React içerisinde React Router, React Lazy, React Hookslar, ES6 ile ilgili kullanýmlarda yer alýyor.

CSS => CSS tarafýnda SCSS tercih edildi. SCSS'in getirdiði yenilikler kullanýlmaya çalýþýldý(Variables,mixins,each vb). Class isimlendirmeleri BEM metadolojisine göre yapýldý.Media queryler göstermek amacýyla bir kaç yerde kullanýldý. CSS Framework olarak Bootstrap tercih edildi.

Data => Data için Fake-API tercih edildi. Fake API'yi kullanabilmek için graphql-faker kütüphanesini dahil ettim projeye. Graphql içerisinden ilgili model tasarlanmasý yapýldý, ardýndan örnek veriler basýldý.

State Management => State Management olarak Redux tercih edildi. 

HTTP => HTTP istekleri için axios kütüphanesi kullanýldý. 

Event Logs => Ýlgili log giriþlerine Inspect(F12)'ten ulaþýlabilir. Konsol içerisinde hangi iþlemler yapýldýðýný kontrol edebilirsiniz.

Kullanýlan Kütüphaneler :

axios
react-bootstrap
react-redux
graphql