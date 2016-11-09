---
published: true
title: Jekyll for Dummies
layout: post
tags: [GithubPages, CodeLyfe, BesutKode]
categories: [Tutorial]
---

Ceritanya, waktu kemarin saya mencoba untuk membuat _blog post_ di situs web ini, saya iseng menggunakan [tinypress] seperti yang disarankan oleh [@berviantoleo][leo]. Masalahnya, ketika saya berhasil mengetuk tulisan _post now_, yang saya dapat hanya _commit_ baru.

Tidak ada artikel baru.

Lalu artikelnya mana???

Setelah bertukar pesan langsung dengan orangnya, dia baru berkata seperti ini pada saya: "Maaf ya, aku lupa memberitahukan _dependency_ apa saja yang diperlukan oleh [tinypress]. "

T E R S E R A H  
E  
R  
S  
E  
R  
A  
H

Lalu ketika kutanya bagaimana cara menginstal jekyll, apa hanya perlu mengikuti tutorial di situsnya, [@berviantoleo][leo] dengan santainya menjawab, "Ya, pilih dulu _jekyll themes_ yang kamu mau, lalu instal."

Sudah.

Itu saja instruksinya.

Serius.

**(Mama, Livia tjapeque.)**

Jadi, daripada ada orang-orang yang terjebak dalam kesalahan yang sama seperti saya, saya memutuskan untuk membuat artikel ini: cara memulai blog dengan jekyll! Mohon maaf sebelumnya, karena keterbatasan waktu, saya mungkin tidak akan sempat memberikan gambar step-by-step yang diperlukan. Kamu boleh melewatkan bagian-bagian yang sudah pernah kamu kerjakan, seperti mendaftar GitHub misalnya. Silakan disimak!

---

### Langkah 0: KETAHUI MEDAN PERANGMU.

Sebelumnya, Jekyll itu apa sih? Jekyll adalah _static web generator_ yang ditulis dalam bahasa pemrograman `Ruby`. Berbeda dengan Wordpress, sebuah _content management service_ (CMS) yang memiliki begitu banyak pilihan untuk memublikasikan artikelmu (sampai-sampai sering pusing sendiri dalam melakukannya), Jekyll langsung memublikasikan kode apa saja yang kamu tulis. Jadi mirip dengan merintis situs web dari awal, dari membuat laman HTML-nya sendiri.

Namun, berbeda dengan _static web generator_ lain, Jekyll mengadaptasi beberapa sistem CMS seperti tagar dan pembagian kategori, sehingga artikel-artikelmu dapat dengan mudah dipilah dalam bagian-bagian tersendiri. Malahan, [tema yang saya gunakan ini][space], dapat menunjukkan satu laman berisi semua artikel yang telah disortir berdasarkan tagar ataupun kategori yang digunakan. Sangat berguna!

Jadi, tunggu apa lagi? Ayo bermain-main dengan Jekyll sekarang juga!

```
Peringatan:
Jekyll lebih nyaman jika digunakan di Linux ataupun Mac OS X. Aku sendiri menggunakan Ubuntu 16.04 saat menginstal Jekyll. Untuk pengguna Windows, coba cari-cari langkah spesifiknya di tempat lain ^_^
```

### Langkah 1: GITHUB PAGES.

Sebelum menggunakan Jekyll, tentunya kamu harus menyiapkan situsmu dulu di internet. Kamu bisa menggunakan layanan _hosting_ sendiri, namun akan lebih mudah kalau kamu menggunakan GitHub Pages sebagai media blog-mu. Lagi pula, Jekyll memang dirancang untuk GitHub Pages kok.

1. Buat akun GitHub. Tidak butuh penjelasan, kan?
2. Buat repositori GitHub Pages-mu. Beri nama `username.github.io`, lalu klik opsi `Add .gitignore`. Masukkan daftar ini ke dalam dokumen `.gitignore`-mu:  
```  
_site/
.sass-cache/
.jekyll-metadata
node_modules
_drafts
```
3. Atur Git di komputermu sesukamu. Ada yang menggunakan GUI? Tidak masalah. Untuk yang menggunakan _shell command_, gunakan sintaks ini:  
```  
$ git config --global color.ui true
$ git config --global user.name "YOUR NAME"
$ git config --global user.email "YOUR@EMAIL.com"
```
4. Sudah jadi? [_Clone_ repositori tersebut ke komputermu](https://help.github.com/articles/cloning-a-repository/).

### Langkah 2: INSTAL RUBY.

Kalau kamu sudah memeriksa kehadiran Ruby dalam sistemmu, silakan lewati langkah ini. Sebenarnya, ada banyak situs yang mengajarkan cara menginstal Ruby. Untuk pengguna Ubuntu 16.04 seperti aku, pastikan kalian sudah memperbarui sistem kalian. Aku akan memberikan informasi cara menginstal Ruby di Ubuntu 16.04 dengan `rbenv`. Berikut ini sintaks shell yang bisa kalian gunakan, aku ambil dari [sini](https://gorails.com/setup/ubuntu/16.04).

1. Pertama-tama, instal _dependency_ yang diperlukan. Pastikan semuanya terinstal dengan sempurna.   
```  
$ sudo apt-get update
$ sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```
2. Sekarang, instal `rbenv` sebagai tempat menginstal Ruby.  
```  
$ cd
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ exec $SHELL
```
3. Waktunya menginstal Ruby! Proses ini akan memakan waktu, jadi sambil instal, cek tema-tema lucu di [Jekyll Themes][themeshop].  
```  
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
$ exec $SHELL
$ rbenv install 2.3.1
$ rbenv global 2.3.1
$ ruby -v
```
	Sudah menemukan Ruby versi 2.3.1 belum? Kalau sudah, berarti Ruby sudah tersedia dalam sistemmu.  
4. Tambahan-tambahan lain (termasuk NodeJS)  
```  
$ gem install bundler
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ rbenv rehash
```

### Langkah 3: MENGATUR JEKYLL.

Enggak ada ceritanya kalian menggunakan tema standar Jekyll kalau mengikuti tutorial ini. Ti. Dak. Sebab, bahkan tema Redux yang menjadi tema utama Tumblr, masih jauh lebih berkelas daripada tema standar Jekyll. Jadi sebaiknya kalian menggunakan tema yang sudah kalian pilih tadi.

1. Klik tema yang diinginkan, _download_ atau _fork_ (terserah pada kalian) ke dalam sebuah folder.
2. Salin seluruh isi folder tersebut ke dalam repo lokal yang sudah diunduh ke komputer kalian.
3. Baca README, about, dan terutama `_config.yml`. Kalian **wajib** membaca dan memahami isi dua bagian itu, karena kunci dari personalisasi blog kalian ada di dokumen `_config.yml`.
4. Pindahkan direktori ke laman tempat blog kalian berdiam. Jalankan `$ jekyll serve -w` dan kunjungi <http://localhost:4000> dari peramban kalian
5. Mulai sekarang, kalau ada perubahan dalam dokumen-dokumen kalian, perubahan tersebut akan segera diperbarui di _localhost_ kalian. Cek hasilnya di peramban sebelum finalisasi commit.

### Langkah 4: PUBLIKASI.

Setelah semua materinya siap, jalankan kode ini sebelum membuka situs baru kalian <http://[username].github.io>:
```  
$ git add *
$ git commit -m (error message)
$ git push origin master
```

Selamat menikmati blog baru kalian! Kalau ada pertanyaan, jangan sungkan-sungkan untuk menghubungi saya, ya ^^.

---

**_--- Callooh, callay! ---_**

[leo]: http://berviantoleo.github.io
[tinypress]: http://tinypress.co
[space]: https://github.com/victorvoid/space-jekyll-template/
[themeshop]: http://jekyllthemes.org