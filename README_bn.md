<div align="center">
  <img src="./assets/logo-16x9.svg" alt="CyberBot Logo" width="400">
  <h1>সাইবার বট 🤖</h1>
  <p><strong>উন্নত বৈশিষ্ট্যের সাথে একটি আধুনিক ফেসবুক মেসেঞ্জার বট</strong></p>
</div>

<p align="center">
  <a href="README.md">English</a> |
  <strong>বাংলা</strong>
</p>

<p align="center">
  <a href="https://github.com/GrandpaAcademy/Cyber-Bot-v2/stargazers"><img src="https://img.shields.io/github/stars/GrandpaAcademy/Cyber-Bot-v2?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/GrandpaAcademy/Cyber-Bot-v2/network/members"><img src="https://img.shields.io/github/forks/GrandpaAcademy/Cyber-Bot-v2?style=flat-square" alt="Forks"></a>
  <img src="https://img.shields.io/badge/version-2.0.0-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/Node.js-20.x-brightgreen?style=flat-square" alt="Node.js">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/GrandpaAcademy/Cyber-Bot-v2?style=flat-square" alt="License"></a>
</p>

## 📚 ইনডেক্স
- [ফিচার](#-ফিচার)
- [সিস্টেম রিকোয়ারমেন্ট](#-সিস্টেম-রিকোয়ারমেন্ট)
- [ইন্সটল করার নিয়ম](#-ইন্সটল-করার-নিয়ম)
- [সেটিংস](#-সেটিংস)
- [নতুন কমান্ড বানানো](#-নতুন-কমান্ড-বানানো)
- [সিকিউরিটি](#-সিকিউরিটি)
- [নতুন আপডেট](#-নতুন-আপডেট)
- [হেল্প](#-হেল্প)
- [কন্ট্রিবিউশন](#-কন্ট্রিবিউশন)
- [লাইসেন্স](#-লাইসেন্স)

## ✨ ফিচার

- 🚀 **মডার্ন স্ট্রাকচার**: Node.js 20.x দিয়ে বানানো
- 🌍 **মাল্টি-ল্যাংগুয়েজ**: ইংরেজি আর বাংলা সাপোর্ট
- 🔒 **সিকিউরিটি**: বিল্ট-ইন অ্যাপস্টেট এনক্রিপশন
- ⚡ **ফাস্ট পারফরম্যান্স**: অপটিমাইজড কোড
- 🎯 **ইজি এক্সটেনশন**: সহজে নতুন কমান্ড যোগ করা যায়
- 🛠 **কাস্টমাইজেবল**: যেকোনো সেটিংস বদলানো যায়
- 👥 **গ্রুপ ম্যানেজমেন্ট**: অ্যাডভান্সড গ্রুপ ফিচার
- 🔍 **কমান্ড এলিয়াস**: একই কমান্ড চালানোর বিভিন্ন উপায়
- ⏱ **কুলডাউন**: স্প্যামিং প্রতিরোধ সিস্টেম
- 🔐 **পারমিশন**: ইউজার, এডমিন, ওনার লেভেল কন্ট্রোল

## 📋 সিস্টেম রিকোয়ারমেন্ট

- Node.js 20.x অথবা নতুন ভার্সন
- NPM বা Yarn
- Git
- Facebook একাউন্ট

## 🚀 ইন্সটল করার নিয়ম

1. **প্রথমে রিপো ক্লোন করুন**:
```bash
git clone https://github.com/GrandpaAcademy/Cyber-Bot-v2.git
cd Cyber-Bot-v2
```

2. **পैকেজগুলো ইন্সটল করুন**:
```bash
npm install --legacy-peer-deps
```

3. **বট স্টার্ট করুন**:
```bash
npm start
```

## ⚙️ সেটিংস

### ল্যাংগুয়েজ সেটিংস
```json
{
  "language": "bn",  // "en" English, "bn" Bangla
  "PREFIX": "!",     // কমান্ড প্রেফিক্স
  "adminOnly": false // শুধু এডমিনদের জন্য বট চালু করতে true করুন
}
```

### সিকিউরিটি সেটিংস
```json
{
  "encryptSt": true,  // এনক্রিপশন অন করুন
  "ADMINBOT": ["YOUR_FACEBOOK_UID"]  // এডমিন UID
}
```

## 🔒 সিকিউরিটি

- `config.json` এ `encryptSt` অন করে রাখুন
- `appstate.json` ফাইল সিক্রেট রাখুন
- রেগুলার বট আপডেট করুন
- সেনসেটিভ ডাটার জন্য env ভ্যারিয়েবল ইউজ করুন

## 🔄 নতুন আপডেট

- W3S-FCA আপগ্রেড করে স্টেবল করা হয়েছে
- সিকিউরিটি ফিচার আপডেট করা হয়েছে
- কমান্ড এলিয়াস যোগ করা হয়েছে
- এরর হ্যান্ডলিং ইম্প্রুভ করা হয়েছে
- বাগ ফিক্স করা হয়েছে

## 💬 হেল্প

- [টেলিগ্রাম গ্রুপ](https://t.me/Grandpa_Academy)
- [ইউটিউব চ্যানেল](https://www.youtube.com/@Grandpa_Academy)
- [ফেসবুক পেজ](https://www.facebook.com/GrandpaEJ)

## 🤝 কন্ট্রিবিউশন

1. রিপো ফর্ক করুন
2. নতুন ব্রাঞ্চ বানান
3. চেঞ্জ কমিট করুন
4. ব্রাঞ্চে পুশ করুন
5. পুল রিকুয়েস্ট খুলুন

## 📄 লাইসেন্স

এই প্রজেক্টে MIT লাইসেন্স ব্যবহার করা হয়েছে - [LICENSE](LICENSE) ফাইল দেখুন

---

<p align="center"><a href="https://github.com/GrandpaAcademy">গ্র্যান্ডপা একাডেমি</a> দ্বারা 💖 দিয়ে তৈরি</p>

<p align="center">
  কপিরাইট © 2025 
  <a href="https://github.com/GrandpaAcademy">গ্র্যান্ডপা একাডেমি</a> |
  <a href="https://github.com/GrandpaAcademy/Cyber-Bot-v2">সাইবার বট</a>
</p>
