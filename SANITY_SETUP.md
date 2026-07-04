Sanity setup

1) Sanity proje oluşturun (zaten projectId `nerr9xkw` var). Eğer farklı bir projectId kullanacaksanız `src/lib/sanity.ts` dosyasını güncelleyin.

2) Sanity Studio kurun (yerel veya hosted)
   npm create sanity@latest
   - Project seçerken `nerr9xkw` projectId veya yeni proje oluşturun.

3) Schemas
   - `src/schemas/unavailable.ts` örnek schema eklendi. Studio içindeki schemas klasörüne ekleyin ve rebuild yapın.

4) CORS
   - Sanity Dashboard -> API -> CORS origins: ekleyin
     - http://localhost:5174
     - https://bostonconsultinghub.com

5) İçerik
   - Sanity Studio'ya giriş yapın ve `Unavailable` koleksiyonuna tarih ve saatleri ekleyin.
   - Date format: YYYY-MM-DD, Times: string list ("09:00")

6) Frontend
   - `src/lib/sanity.ts` hazırlandı.
   - `src/pages/Appointment.tsx` fetch ve disable mantığı eklenecek (ben ekliyorum). 

7) Dependecies
   - Install for dev: npm install @sanity/client

