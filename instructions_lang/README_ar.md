# Valomy (Valorant تراكب)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** عبارة عن تراكب تيار لـ Valorant ، يظهر لك تلقائيًا بفضل Valorant api ترتيبك وإحصائيات الحساب المتصل على Valorant

**خطوات إعداد التراكب على البث الخاص بك:**

- يجب عليك أولا تحميل المشروع.
  <img alt="تحميل المشروع" src="https://i.ibb.co/0BqgJdr/image.png" width="100%" style="border-radius: 5px">

- تحتاج إلى استخراج ملف <code> zip / rar </code>

- يجب عليك تثبيت Node.js (إذا كان Node.js مثبتًا بالفعل ، يمكنك تخطي التثبيت):

  - يتوفر ملف تثبيت Node.js بالاسم: <code>node-v18.16.0-64.msi</code>

- بمجرد التثبيت ، يجب تثبيت حزم المشروع باستخدام الأمر <code> npm install </code> مباشرة في مجلد المشروع أو يمكنك تشغيل ملف <code> install.cmd </code> لتثبيت حزم المشروع.
  <img src="https://i.ibb.co/HDYgmhK/image.png" alt="npm install" width="100%" style="border-radius: 5px" />
  أو
  <img src="https://i.ibb.co/tYH7gfQ/image.png" alt="install.cmd" width="100%" style="border-radius: 5px"  />

- يجب أن تذهب إلى ملف <code> settings.json </code> لتغيير منطقتك المقابلة لحساب Valorant الخاص بك ، المناطق المتاحة هي التالية:

  | رمز المنطقة |     اسم المنطقة     |
  | ----------- | :-----------------: |
  | eu          |       أوروبا        |
  | ap          | آسيا والمحيط الهادئ |
  | na          |   أمريكا الشمالية   |
  | kr          |   كوريا الجنوبية    |
  | latam       |  أمريكا اللاتينية   |
  | br          |      البرازيل       |

    <img src="https://i.ibb.co/p226tSV/image.png" alt="جميع المناطق متاحة" width="100%" style="border-radius: 5px" />

- يمكنك بدء البرنامج النصي باستخدام الأمر <code> npm run serve </code> أو تشغيل الملف <code> start.cmd </code>
  <img src="https://i.ibb.co/cTwTsLX/image.png" alt="npm run serve" width="100%" style="border-radius: 5px" />

- يمكنك الانتقال إلى العنوان التالي لمعرفة ما إذا كان لديك حق الوصول إلى التراكب الخاص بك: http://localhost:3000
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="صفحة localhost:3000" width="100%" style="border-radius: 5px" />

- سنضيف الآن التراكب إلى البث (Streamlabs و OBS و Twitch Studio وما إلى ذلك)

  - تذهب إلى برنامج البث الخاص بك.
  - تقوم بإضافة مصدر جديد إلى المشهد الخاص بك من نوع "Browser Source".
  - ثم تضع عنوان url localhost في عنوان url الخاص بـ Browser Source": http://localhost:3000"
  - ضع الأبعاد 1920 × 1080.

    <img alt="على منصة البث الخاصة بك" src="https://i.ibb.co/JnNjkWY/image.png" width="100%" style="border-radius: 5px" />

    <img alt="إضافة مصدر جديد إلى المشهد الخاص بك" src="https://i.ibb.co/L0vft4D/image.png" width="100%" style="border-radius: 5px" />

    <img alt="أضف عنوان URL للمضيف المحلي" src="https://i.ibb.co/ryXpQ4y/image.png" width="100%" style="border-radius: 5px" />

**نتيجة :**

<img alt="مظاهرة التراكب" src="https://i.ibb.co/98xLLCx/image.png" width="100%" style="border-radius: 5px" />

**معلومة :**

كل 4 دقائق سيغير التراكب طريقة عرضه ، كل 4 دقائق سيعرض الترتيب فقط.
إذا لم يعثر التراكب على حسابك ، فسيتم تعيينه افتراضيًا على ملف تعريف Soracle # Anemy ، حتى يعثر على ملف التعريف الخاص بك. (يجب تسجيل الدخول إلى عميل Riot وتشغيله على الأقل حتى يتمكن من العثور عليك).
