# Projeyi ayağa kaldırmak için;

npm i

Serveri ayağa kaldırmak için : graphql-faker --open

Projeyi çalıştırmak için;

npm start run

## Proje içerisinde kullanılan araç ve teknolojiler

Front End Framework => Framework olarak React tercih edildi. React içerisinde React Router, React Lazy, React Hookslar, ES6 ile ilgili kullanımlarda yer alıyor.

CSS => CSS tarafında SCSS tercih edildi. SCSS'in getirdiği yenilikler kullanılmaya çalışıldı(Variables,mixins vb). Class isimlendirmeleri BEM metadolojisine göre yapıldı.Media queryler göstermek amacıyla bir kaç yerde kullanıldı. CSS Framework olarak Bootstrap tercih edildi.

Data => Data için Fake-API tercih edildi. Fake API'yi kullanabilmek için graphql-faker kütüphanesini dahil ettim projeye. Graphql içerisinden ilgili model tasarlanması yapıldı, ardından örnek veriler basıldı.

State Management => State Management olarak Redux tercih edildi. 

HTTP => HTTP istekleri için axios kütüphanesi kullanıldı. 

Event Logs => İlgili log girişlerine Inspect(F12)'ten ulaşılabilir. Konsol içerisinde hangi işlemler yapıldığını kontrol edebilirsiniz.

Kullanılan Kütüphaneler :

axios
react-bootstrap
react-redux
graphql
