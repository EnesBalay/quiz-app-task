# Quiz App - JavaScript Çalışması

Bu proje, 10 sorudan oluşan bir quiz test uygulamasıdır. Sorular, aşağıdaki bağlantıdan JSON formatında çekilecektir:

[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## Başlarken

Geliştirme sunucusunu başlatmak için aşağıdaki komutlardan birini kullanın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

Tarayıcınızdan [http://localhost:3000](http://localhost:3000) adresine giderek uygulamanın çalıştığını kontrol edebilirsiniz.

## Script’in Çalışma Sistemi

- **Soru Sayısı**: Test toplamda 10 sorudan oluşmaktadır.
- **Soru Formatı**: Her soru A-B-C-D şıklarından oluşmaktadır. (Şıkları, soru içerisindeki string ifadelerden kendiniz parse edip kullanabilirsiniz.)
- **Zamanlayıcı**: 
  - Her soru ekranda **30 saniye** kalacaktır.
  - İlk **10 saniye** boyunca cevap şıklarına tıklanamayacak olup, **10. saniyeden** sonra şıklara tıklanabilir.
  - **30. saniyede** otomatik olarak bir sonraki soruya geçilecektir.
- **Geçmiş Sorulara Dönüş**: Kullanıcı geçmiş sorulara geri dönemeyecektir.
- **Sonuçlar**: Testin bitiminde her soruya verilen yanıtlar bir tablo olarak gösterilecektir.