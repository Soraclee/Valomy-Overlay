# Valomy (Valorant تراكب)

![DOWNLOAD](https://img.shields.io/github/downloads/soraclee/valorantoverlay/total?style=for-the-badge)
![ISSUES](https://img.shields.io/github/issues/soraclee/valorantoverlay?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/soraclee/ValorantOverlay?style=for-the-badge)

**Valomy** عبارة عن تراكب تيار لـ Valorant ، يظهر لك تلقائيًا بفضل Valorant api ترتيبك وإحصائيات الحساب المتصل على Valorant

**خطوات إعداد التراكب على البث الخاص بك:**

- يجب عليك أولاً تنزيل أحدث إصدار من التراكب عن طريق اختيار النظام الأساسي الخاص بك.
  <img alt="قم بتنزيل المشروع" src="https://i.ibb.co/MPgFkJ8/image.png" width="100%" style="border-radius: 5px">
  <img alt="منصات مختلفة متاحة" src="https://i.ibb.co/xJMf0gY/image.png" width="100%" style="border-radius: 5px">

- تحتاج إلى استخراج ملف <code> zip / rar </code>.

- يمكنك وضع الملف القابل للتنفيذ وملف <code> settings.json </code> في نفس المجلد
  <img src="https://i.ibb.co/vhwkTg6/image.png" alt="الملف التنفيذي و settings.json في نفس المجلد" />

- بمجرد التثبيت ، ستحتاج إلى الانتقال إلى ملف <code> settings.json </code> لتغيير منطقتك المقابلة لحساب Valorant الخاص بك ويمكنك تغيير اللغة لعرض معلومات التراكب ثم الحفظ. المناطق واللغات المتوفرة هي كما يلي:

| اسم المنطقة         | كود المنطقة |
| ------------------- | :---------: |
| أوروبا              |     eu      |
| آسيا والمحيط الهادئ |     ap      |
| أمريكا الشمالية     |     na      |
| كوريا الجنوبية      |     kr      |
| أمريكا اللاتينية    |    latam    |
| البرازيل            |     br      |

| اسم اللغة                          | كود اللغة |
| ---------------------------------- | :-------: |
| العربية (الإمارات العربية المتحدة) |   ar-AE   |
| الألمانية                          |   de-DE   |
| الإنجليزية (الولايات المتحدة)      |   en-US   |
| الإسبانية                          |   es-ES   |
| الأسبانية (المكسيك)                |   es-MX   |
| الفرنسية                           |   fr-FR   |
| الأندونيسية                        |   id-ID   |
| إيطالي                             |   it-IT   |
| اليابانية                          |   ja-JP   |
| كوري                               |   ko-KR   |
| البولندية                          |   pl-PL   |
| البرتغالية (البرازيل)              |   pt-BR   |
| الروسية                            |   ru-RU   |
| التايلاندية                        |   th-TH   |
| التركية                            |   tr-TR   |
| الفيتنامية                         |   vi-VN   |
| الصينية (المبسطة)                  |   zh-CN   |
| الصينية (تايوان)                   |   zh-TW   |

<code>settings.json</code>
<img src="https://i.ibb.co/MGLJ5Jz/image.png" alt="settings.json" width="100%" style="border-radius: 5px" />

- يمكنك تشغيل الملف القابل للتنفيذ في المجلد.
  <img src="https://i.ibb.co/Zh68gh3/image.png" alt="بدء تشغيل الملف القابل للتنفيذ" width="100%" style="border-radius: 5px" />

- يمكنك الانتقال إلى العنوان التالي لمعرفة ما إذا كان لديك حق الوصول إلى التراكب الخاص بك: http: // localhost: 3000 (يجب عليك الركض قبل Valorant أو عميل Riot)
  <img src="https://i.ibb.co/7KgmsQc/image.png" alt="صفحة localhost: 3000" width="100%" style="border-radius: 5px" />

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
