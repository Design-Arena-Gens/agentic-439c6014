'use client';

import { useState } from 'react';
import {
  BookOpen,
  TrendingUp,
  Lightbulb,
  Wrench,
  ShoppingCart,
  Target,
  DollarSign,
  Users,
  Palette,
  FileText,
  Video,
  Code,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Rocket,
  BarChart3,
  Megaphone,
  Shield,
  Zap
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  topics: string[];
  tools?: string[];
  actionItems?: string[];
}

export default function Home() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const toggleLesson = (moduleId: number, lessonId: number) => {
    const key = `${moduleId}-${lessonId}`;
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedLessons(newCompleted);
  };

  const modules: Module[] = [
    {
      id: 1,
      title: "الأساسيات والمفاهيم",
      description: "ابدأ رحلتك بفهم عميق للمنتجات الرقمية وأنواعها المختلفة",
      icon: BookOpen,
      color: "bg-blue-500",
      lessons: [
        {
          id: 1,
          title: "ما هي المنتجات الرقمية؟",
          duration: "30 دقيقة",
          topics: [
            "تعريف المنتجات الرقمية وخصائصها الفريدة",
            "الفرق بين المنتجات الرقمية والمادية",
            "لماذا المنتجات الرقمية مربحة؟ (هامش ربح 90%+)",
            "قصص نجاح ملهمة من رواد أعمال عرب"
          ],
          actionItems: [
            "حدد 3 منتجات رقمية تستخدمها في حياتك اليومية",
            "اكتب رؤيتك: لماذا تريد دخول هذا المجال؟"
          ]
        },
        {
          id: 2,
          title: "أنواع المنتجات الرقمية الرئيسية",
          duration: "45 دقيقة",
          topics: [
            "الكتب الإلكترونية (eBooks) - سهلة البداية، منخفضة التكلفة",
            "الدورات التعليمية (Online Courses) - أعلى قيمة، تتطلب جهد أكبر",
            "القوالب والموارد (Templates) - Notion, Canva, Excel, PowerPoint",
            "الفنون الرقمية (Digital Art) - للمصممين والفنانين",
            "البرمجيات والتطبيقات (SaaS) - تتطلب مهارات تقنية",
            "الصور والفيديوهات (Stock Media) - محتوى جاهز للاستخدام",
            "الموسيقى والمؤثرات الصوتية",
            "العضويات والمحتوى المدفوع (Memberships)"
          ],
          tools: [
            "Canva - لتصميم الكتب والقوالب",
            "Notion - لإنشاء قوالب إنتاجية",
            "Teachable/Udemy - لاستضافة الدورات"
          ]
        },
        {
          id: 3,
          title: "مقارنة شاملة: أي نوع يناسبك؟",
          duration: "40 دقيقة",
          topics: [
            "جدول مقارنة: التكلفة، الوقت، المهارات المطلوبة، الربحية",
            "أفضل 3 منتجات للمبتدئين بميزانية 0$",
            "منحنى التعلم لكل نوع",
            "متوسط الأسعار في السوق العربي والعالمي",
            "الأخطاء الشائعة في اختيار المنتج الأول"
          ],
          actionItems: [
            "املأ استبيان تقييم المهارات والموارد",
            "اختر نوعين من المنتجات للتركيز عليهما",
            "ابحث عن 5 أمثلة ناجحة لكل نوع اخترته"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "البحث واختيار النيتش المربح",
      description: "اكتشف الفرص الذهبية في السوق وحدد جمهورك المستهدف",
      icon: Target,
      color: "bg-green-500",
      lessons: [
        {
          id: 1,
          title: "فن اكتشاف الأفكار المربحة",
          duration: "50 دقيقة",
          topics: [
            "5 طرق مجربة لتوليد أفكار منتجات رقمية",
            "تحليل نقاط الألم (Pain Points) في السوق",
            "استخدام Google Trends لاكتشاف الترندات",
            "البحث في المنتديات والمجموعات (Reddit, Quora, Facebook Groups)",
            "تحليل التعليقات والمراجعات على المنتجات المنافسة",
            "فرص في السوق العربي لم تُستغل بعد"
          ],
          tools: [
            "Google Trends - تحليل الاتجاهات مجاناً",
            "AnswerThePublic - أسئلة الجمهور",
            "Reddit, Quora - فهم احتياجات الناس"
          ],
          actionItems: [
            "اكتب 20 فكرة منتج دون تقييم (Brainstorming)",
            "صنف الأفكار حسب: شغفك، مهاراتك، الطلب في السوق"
          ]
        },
        {
          id: 2,
          title: "أدوات دراسة السوق والمنافسين",
          duration: "60 دقيقة",
          topics: [
            "استخدام Etsy, Gumroad للبحث عن المنافسين",
            "تحليل الكلمات المفتاحية بـ Keywords Everywhere (مجاني)",
            "تتبع أداء المنافسين على وسائل التواصل",
            "حساب حجم السوق المحتمل (TAM, SAM, SOM)",
            "مؤشرات النجاح: المبيعات، التقييمات، المتابعين",
            "إنشاء جدول تحليل منافسين (Competitive Matrix)"
          ],
          tools: [
            "SimilarWeb - تحليل زيارات المواقع",
            "Keywords Everywhere - بحث الكلمات المفتاحية",
            "Notion/Google Sheets - تنظيم البحث"
          ],
          actionItems: [
            "اختر 5 منافسين مباشرين وحلل منتجاتهم",
            "حدد 3 نقاط ضعف في منتجاتهم يمكنك تحسينها"
          ]
        },
        {
          id: 3,
          title: "بناء الـ Buyer Persona المثالي",
          duration: "45 دقيقة",
          topics: [
            "ما هو الـ Persona ولماذا هو مهم؟",
            "العناصر الأساسية: الديموغرافيا، الاهتمامات، التحديات، الأهداف",
            "استخدام الاستبيانات والمقابلات (حتى لو صغيرة)",
            "إنشاء 2-3 Personas لمنتجك",
            "فهم رحلة العميل (Customer Journey) من الوعي للشراء",
            "قالب جاهز لملء معلومات الـ Persona"
          ],
          actionItems: [
            "أنشئ Persona واحد على الأقل بالتفصيل",
            "اسأل 5 أشخاص من جمهورك المستهدف عن احتياجاتهم",
            "ارسم خريطة رحلة العميل الخاصة بمنتجك"
          ]
        },
        {
          id: 4,
          title: "معايير اختيار النيتش الرابح",
          duration: "35 دقيقة",
          topics: [
            "القاعدة الذهبية: Passion + Profit + People",
            "تجنب الأسواق المشبعة (Over-saturated)",
            "البحث عن Sub-niches (التخصصات الفرعية)",
            "اختبار الفكرة قبل الإنتاج الكامل (Pre-selling)",
            "قائمة 50+ نيتش مربح في السوق العربي",
            "متى تغير النيتش ومتى تستمر؟"
          ],
          actionItems: [
            "قيّم أفكارك بناءً على 10 معايير موضوعية",
            "اختر نيتش واحد للبدء فيه",
            "اكتب خطة اختبار بسيطة (MVP Test Plan)"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "مرحلة الإنشاء والتطوير",
      description: "حول فكرتك إلى منتج رقمي احترافي خطوة بخطوة",
      icon: Wrench,
      color: "bg-purple-500",
      lessons: [
        {
          id: 1,
          title: "الأدوات الأساسية لكل نوع منتج",
          duration: "55 دقيقة",
          topics: [
            "أدوات الكتب الإلكترونية: Canva, Google Docs, Atticus",
            "أدوات الدورات: Loom, OBS Studio, Camtasia",
            "أدوات القوالب: Notion, Figma, Canva Pro",
            "أدوات الجرافيك: Adobe Suite, Affinity, Procreate",
            "أدوات الذكاء الاصطناعي: ChatGPT, Midjourney, Jasper",
            "مقارنة المجاني vs المدفوع: متى تستثمر؟",
            "بدائل مجانية بالكامل للبدء بـ 0$"
          ],
          tools: [
            "Canva Free - تصميم احترافي مجاني",
            "Notion - قوالب وتنظيم",
            "ChatGPT - مساعد ذكاء اصطناعي",
            "Loom - تسجيل الشاشة والفيديو"
          ]
        },
        {
          id: 2,
          title: "خطوات إنشاء MVP (الحد الأدنى من المنتج)",
          duration: "90 دقيقة",
          topics: [
            "فلسفة MVP: ابدأ صغيراً، تعلّم سريعاً",
            "خطوة 1: التخطيط والـ Outline",
            "خطوة 2: إنشاء المحتوى الأساسي (Content Creation)",
            "خطوة 3: التصميم والتنسيق (Design & Formatting)",
            "خطوة 4: المراجعة والتحسين (Quality Check)",
            "خطوة 5: التغليف النهائي (Packaging)",
            "مثال عملي: إنشاء eBook في 7 أيام",
            "مثال عملي: قالب Notion احترافي في 3 أيام"
          ],
          actionItems: [
            "حدد Scope منتجك الأول (ما سيتضمنه وما لن يتضمنه)",
            "أنشئ Outline مفصل (جدول محتويات/خطة)",
            "ابدأ بإنشاء 20% من المنتج هذا الأسبوع"
          ]
        },
        {
          id: 3,
          title: "معايير الجودة العالية",
          duration: "40 دقيقة",
          topics: [
            "معايير جودة المحتوى: القيمة، الوضوح، التنظيم",
            "معايير جودة التصميم: الاحترافية، سهولة الاستخدام",
            "أهمية Branding حتى للمنتجات الصغيرة",
            "إنشاء Guidelines بسيط (ألوان، خطوط، أسلوب)",
            "نصائح لغير المصممين: Templates جاهزة",
            "استخدام AI لتحسين الجودة دون خبرة"
          ],
          tools: [
            "Coolors - اختيار لوحة ألوان احترافية",
            "Google Fonts - خطوط مجانية عالية الجودة",
            "Grammarly - تدقيق لغوي للإنجليزية"
          ]
        },
        {
          id: 4,
          title: "الاختبار والتغذية الراجعة",
          duration: "30 دقيقة",
          topics: [
            "أهمية Beta Testing قبل الإطلاق",
            "كيف تجد مختبرين (أصدقاء، مجموعات، منصات)",
            "أسئلة التغذية الراجعة الصحيحة",
            "تحليل الملاحظات وتحديد الأولويات",
            "متى تطلق المنتج؟ (لا تسعَ للكمال المطلق)",
            "استراتيجية التحديثات المستقبلية (V1.0, V2.0)"
          ],
          actionItems: [
            "اختر 5-10 أشخاص للاختبار التجريبي",
            "جهّز استبيان تغذية راجعة من 10 أسئلة",
            "نفّذ أهم 3 تحسينات قبل الإطلاق"
          ]
        },
        {
          id: 5,
          title: "التسعير الاستراتيجي",
          duration: "45 دقيقة",
          topics: [
            "استراتيجيات التسعير: Value-based, Cost-plus, Competition-based",
            "علم نفس التسعير: $9.99 vs $10, Anchoring, Decoy Pricing",
            "نماذج تسعير: سعر واحد، طبقات (Tiers)، Pay What You Want",
            "متوسط الأسعار حسب نوع المنتج والسوق",
            "خصومات الإطلاق وعروض محدودة (Launch Discounts)",
            "اختبار A/B للأسعار"
          ],
          actionItems: [
            "ابحث عن أسعار 10 منتجات منافسة",
            "احسب التكلفة الحقيقية لمنتجك (وقت + أدوات)",
            "حدد 3 خيارات تسعير لاختبارها"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "المنصات والمتاجر الإلكترونية",
      description: "اختر المنصة المثالية لبيع منتجاتك وابدأ التجارة",
      icon: ShoppingCart,
      color: "bg-orange-500",
      lessons: [
        {
          id: 1,
          title: "مقارنة المنصات الجاهزة",
          duration: "50 دقيقة",
          topics: [
            "Gumroad - الأبسط للمبتدئين (عمولة 10%)",
            "Etsy - للقوالب والفنون (رسوم قائمة + عمولة)",
            "Amazon KDP - للكتب الإلكترونية (royalty 35-70%)",
            "Creative Market - للمصممين",
            "Udemy/Skillshare - للدورات (منافسة عالية)",
            "Payhip, SendOwl - بدائل قوية",
            "منصات عربية: Salla, Zid, Jumperz",
            "جدول مقارنة شامل: الرسوم، المميزات، الجمهور"
          ]
        },
        {
          id: 2,
          title: "إنشاء متجرك الخاص",
          duration: "60 دقيقة",
          topics: [
            "متى تحتاج متجر خاص؟ (الحرية vs الجهد)",
            "Shopify - الأفضل للاحتراف (رسوم شهرية)",
            "WordPress + WooCommerce - مرونة كاملة (تقني أكثر)",
            "Salla - منصة عربية متكاملة",
            "Webflow, Framer - للمواقع المخصصة",
            "خطوات التأسيس: الدومين، الاستضافة، التصميم",
            "قوالب جاهزة عربية مجانية ومدفوعة"
          ],
          tools: [
            "Shopify - 14 يوم تجريبي",
            "WordPress.org + WooCommerce (مجاني)",
            "Salla - خطة مجانية للبداية"
          ],
          actionItems: [
            "أنشئ حساب تجريبي في منصتين مختلفتين",
            "اختر المنصة الأنسب لمنتجك وميزانيتك",
            "جهّز قائمة بالصفحات المطلوبة (من نحن، سياسات، إلخ)"
          ]
        },
        {
          id: 3,
          title: "تحسين صفحة المنتج لزيادة المبيعات",
          duration: "55 دقيقة",
          topics: [
            "عناصر صفحة المنتج الرابحة: العنوان، الوصف، الصور، CTA",
            "كتابة وصف مقنع (Copywriting 101)",
            "استخدام Mockups احترافية للمنتج",
            "إضافة الـ Social Proof (شهادات، تقييمات، عدد المبيعات)",
            "فيديو توضيحي قصير (1-2 دقيقة)",
            "FAQ للإجابة على الاعتراضات",
            "عناصر الثقة: سياسة الاسترجاع، ضمان الجودة",
            "تحسين SEO للمنصات (الكلمات المفتاحية، Tags)"
          ],
          actionItems: [
            "اكتب عنوان منتج في 10 صيغ مختلفة واختر الأفضل",
            "أنشئ 3-5 Mockups بجودة عالية",
            "اجمع 3 شهادات (حتى من Beta Testers)"
          ]
        },
        {
          id: 4,
          title: "بوابات الدفع والأمان",
          duration: "35 دقيقة",
          topics: [
            "بوابات الدفع العالمية: Stripe, PayPal",
            "بوابات الدفع العربية: Moyasar, Tap, Telr",
            "قبول الدفع الدولي للبائعين العرب",
            "الرسوم والعمولات لكل بوابة",
            "حماية المنتج من السرقة (DRM, Watermarks)",
            "سياسات الاسترجاع والضمانات",
            "الامتثال القانوني (الفواتير، الضرائب)"
          ]
        },
        {
          id: 5,
          title: "أتمتة التسليم والإدارة",
          duration: "30 دقيقة",
          topics: [
            "أهمية الأتمتة في المنتجات الرقمية",
            "إعداد التسليم التلقائي بعد الدفع",
            "أدوات إدارة العملاء والطلبات",
            "نظام إدارة البريد الإلكتروني (Email Sequences)",
            "تتبع المبيعات والإحصائيات",
            "Zapier/Make لربط الأدوات",
            "قوالب بريد إلكتروني جاهزة (تأكيد، شكر، متابعة)"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "التسويق والترويج",
      description: "اجذب عملاءك المثاليين واصنع ضجة حول منتجك",
      icon: Megaphone,
      color: "bg-pink-500",
      lessons: [
        {
          id: 1,
          title: "استراتيجية التسويق قبل الإطلاق",
          duration: "45 دقيقة",
          topics: [
            "بناء الانتظار والترقب (Hype Building)",
            "إنشاء قائمة بريدية من الصفر (Landing Page)",
            "استراتيجية Early Bird (خصومات للأوائل)",
            "الإطلاق التدريجي vs الكبير (Soft Launch vs Big Launch)",
            "التعاون مع Micro-influencers",
            "خطة إطلاق 30 يوماً (Launch Roadmap)"
          ]
        },
        {
          id: 2,
          title: "قنوات التسويق المجانية",
          duration: "60 دقيقة",
          topics: [
            "التسويق بالمحتوى (Content Marketing): المدونة، YouTube",
            "وسائل التواصل: اختيار المنصة المناسبة لجمهورك",
            "استراتيجية Instagram/TikTok للمنتجات البصرية",
            "X (Twitter) للـ B2B ومنتجات الإنتاجية",
            "LinkedIn للمحتوى الاحترافي والـ Solopreneurs",
            "Pinterest لمنتجات Lifestyle والقوالب",
            "المجموعات والمنتديات (Reddit, Facebook Groups)",
            "تقنية 'Give Value First' - محتوى مجاني لجذب العملاء"
          ],
          actionItems: [
            "اختر قناتين رئيسيتين للتركيز عليهما",
            "أنشئ خطة محتوى لـ 30 يوماً",
            "انشر أول 3 محتويات قيّمة هذا الأسبوع"
          ]
        },
        {
          id: 3,
          title: "الإعلانات المدفوعة (للمستوى المتوسط)",
          duration: "50 دقيقة",
          topics: [
            "متى تبدأ بالإعلانات؟ (بعد إثبات الفكرة)",
            "ميزانية البداية: $5-10/يوم",
            "Facebook/Instagram Ads للجمهور العربي",
            "Google Ads للكلمات المفتاحية ذات النية العالية",
            "Pinterest Ads لمنتجات Visual",
            "إنشاء أول حملة إعلانية بسيطة",
            "قياس ROI وتحسين الأداء",
            "أخطاء المبتدئين في الإعلانات وكيفية تجنبها"
          ]
        },
        {
          id: 4,
          title: "التسويق بالعمولة (Affiliate Marketing)",
          duration: "40 دقيقة",
          topics: [
            "ما هو Affiliate Marketing ولماذا يعمل؟",
            "إعداد برنامج عمولة (10-30%)",
            "منصات إدارة الـ Affiliates: Gumroad, Tapfiliate, Rewardful",
            "كيف تجذب مسوقين بالعمولة",
            "إنشاء Affiliate Kit (صور، نصوص، روابط)",
            "تتبع الأداء ودفع العمولات"
          ]
        },
        {
          id: 5,
          title: "التسويق عبر البريد الإلكتروني",
          duration: "50 دقيقة",
          topics: [
            "لماذا Email Marketing ملك التسويق (ROI 42:1)",
            "بناء القائمة البريدية: Lead Magnets مجانية",
            "منصات Email: ConvertKit, MailerLite, Mailchimp",
            "أنواع الرسائل: Welcome, Nurture, Sales, Post-purchase",
            "كتابة Subject Lines تزيد معدل الفتح",
            "تسلسل البريد الآلي (Drip Campaigns)",
            "تحليل الأداء: Open Rate, Click Rate, Conversions"
          ],
          tools: [
            "MailerLite - خطة مجانية حتى 1000 مشترك",
            "ConvertKit - للـ Creators"
          ]
        },
        {
          id: 6,
          title: "بناء الحضور الشخصي (Personal Brand)",
          duration: "45 دقيقة",
          topics: [
            "لماذا الناس تشتري من الأشخاص وليس الشركات",
            "مشاركة رحلتك (Behind the Scenes)",
            "استراتيجية 'Build in Public'",
            "التفاعل مع الجمهور وبناء المجتمع",
            "الثبات > الفيروسية (Consistency > Virality)",
            "أمثلة: Daniel Vassallo, Pieter Levels (من الإنجليزية)",
            "رواد أعمال عرب يبنون بشفافية"
          ]
        },
        {
          id: 7,
          title: "SEO للمنتجات الرقمية",
          duration: "40 دقيقة",
          topics: [
            "أساسيات SEO: Keywords, Title, Description, Alt Text",
            "SEO داخل المنصات (Etsy SEO, Gumroad SEO)",
            "SEO لموقعك الخاص (On-page, Technical)",
            "بناء Backlinks بطريقة طبيعية",
            "Content Marketing for SEO",
            "أدوات SEO مجانية: Google Search Console, Ubersuggest"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "التحليل والتحسين المستمر",
      description: "قِس نجاحك وحسّن أداءك باستمرار لتحقيق نمو مستدام",
      icon: BarChart3,
      color: "bg-cyan-500",
      lessons: [
        {
          id: 1,
          title: "المقاييس الأساسية (KPIs)",
          duration: "40 دقيقة",
          topics: [
            "Revenue (الإيرادات) و Profit Margin (هامش الربح)",
            "Conversion Rate (معدل التحويل)",
            "Traffic Sources (مصادر الزيارات)",
            "Customer Acquisition Cost (CAC)",
            "Customer Lifetime Value (LTV)",
            "Refund Rate (معدل الاسترجاع)",
            "Email Open Rate, Click Rate",
            "Social Media Engagement",
            "لوحة تحكم بسيطة (Dashboard) لتتبع كل شيء"
          ]
        },
        {
          id: 2,
          title: "أدوات التحليل",
          duration: "35 دقيقة",
          topics: [
            "Google Analytics 4 للموقع",
            "تحليلات المنصات (Gumroad, Shopify Analytics)",
            "Hotjar لفهم سلوك الزوار",
            "ConvertKit/MailerLite Analytics",
            "Google Data Studio لعمل Dashboards",
            "تتبع الإعلانات: Facebook Pixel, Google Tag Manager"
          ]
        },
        {
          id: 3,
          title: "اختبار A/B والتحسين",
          duration: "45 دقيقة",
          topics: [
            "ما هو A/B Testing ولماذا مهم؟",
            "عناصر للاختبار: العنوان، السعر، الصور، CTA",
            "حجم العينة وزمن الاختبار",
            "أدوات A/B Testing",
            "تحليل النتائج واتخاذ القرار",
            "حالات دراسية: تغييرات صغيرة = نتائج كبيرة"
          ]
        },
        {
          id: 4,
          title: "جمع وتحليل آراء العملاء",
          duration: "30 دقيقة",
          topics: [
            "طرق جمع الـ Feedback: استبيانات، مكالمات، تقييمات",
            "أسئلة Feedback الذهبية",
            "تصنيف الملاحظات: Bugs, Features, Nice-to-have",
            "تحليل Reviews والتعليقات العامة",
            "التفاعل مع Feedback السلبي باحترافية",
            "استخدام Feedback لتطوير V2.0"
          ]
        },
        {
          id: 5,
          title: "استراتيجيات زيادة المبيعات",
          duration: "50 دقيقة",
          topics: [
            "Upselling: منتجات أغلى",
            "Cross-selling: منتجات مكملة",
            "Bundles (الحزم): عدة منتجات بسعر مخفض",
            "استراتيجية Price Tiers (الطبقات)",
            "محتوى إضافي (Bonuses)",
            "عروض محدودة (Scarcity & Urgency)",
            "برامج الولاء للعملاء المتكررين"
          ]
        },
        {
          id: 6,
          title: "التوسع (Scaling)",
          duration: "40 دقيقة",
          topics: [
            "متى تتوسع؟ علامات الجاهزية",
            "إطلاق منتجات جديدة في نفس النيتش",
            "التوسع لأسواق جديدة (ترجمة، توطين)",
            "بناء فريق صغير (مستقلين، VA)",
            "أتمتة العمليات بالكامل",
            "التفكير في SaaS أو Subscriptions",
            "من Solo Creator إلى Small Business"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "الجوانب القانونية والمالية",
      description: "احمِ عملك وأموالك بمعرفة الجوانب القانونية والضريبية",
      icon: Shield,
      color: "bg-red-500",
      lessons: [
        {
          id: 1,
          title: "الملكية الفكرية وحقوق النشر",
          duration: "35 دقيقة",
          topics: [
            "فهم حقوق الملكية الفكرية الأساسية",
            "حماية منتجك من السرقة والنسخ",
            "الاستخدام القانوني للصور والخطوط والموسيقى",
            "مواقع الموارد المجانية قانونياً (Free for Commercial Use)",
            "License Types: Personal vs Commercial",
            "ماذا تفعل إذا سُرق منتجك؟",
            "Terms of Service و Privacy Policy"
          ]
        },
        {
          id: 2,
          title: "الفواتير والضرائب (حسب البلد)",
          duration: "40 دقيقة",
          topics: [
            "هل تحتاج سجل تجاري؟ (يختلف حسب البلد)",
            "إصدار الفواتير: المتطلبات القانونية",
            "ضريبة القيمة المضافة (VAT) للبائعين العرب",
            "Tax Obligations للبيع الدولي",
            "استخدام محاسب أو برامج محاسبة",
            "Wave, QuickBooks للمنتجات الرقمية",
            "أهمية الفصل بين الحسابات الشخصية والتجارية"
          ]
        },
        {
          id: 3,
          title: "عقود العمل الحر والتعاون",
          duration: "25 دقيقة",
          topics: [
            "عقود العمل مع المستقلين (مصممين، مطورين، مسوقين)",
            "حماية الطرفين: NDA, Work Agreement",
            "قوالب عقود جاهزة",
            "التعامل مع النزاعات",
            "Escrow للمدفوعات الآمنة"
          ]
        },
        {
          id: 4,
          title: "إدارة الأموال لرواد الأعمال المنفردين",
          duration: "30 دقيقة",
          topics: [
            "تتبع الدخل والمصاريف",
            "ميزانية التشغيل (الأدوات، الإعلانات، إلخ)",
            "احتياطي طوارئ (Emergency Fund)",
            "إعادة الاستثمار في النمو",
            "متى تترك وظيفتك؟ (إن كنت موظفاً)",
            "التأمين الصحي ومزايا الموظفين (للمنفردين)"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "الإنتاجية والعقلية",
      description: "اعتنِ بنفسك وطوّر عادات تحقق لك النجاح المستدام",
      icon: Zap,
      color: "bg-yellow-500",
      lessons: [
        {
          id: 1,
          title: "عقلية رائد الأعمال (Entrepreneurial Mindset)",
          duration: "35 دقيقة",
          topics: [
            "Growth Mindset vs Fixed Mindset",
            "التعامل مع الفشل والرفض",
            "الصبر والمثابرة: النجاح يحتاج وقت",
            "تجنب مقارنة نفسك بالآخرين",
            "الاحتفال بالانتصارات الصغيرة",
            "بناء Resilience (المرونة النفسية)"
          ]
        },
        {
          id: 2,
          title: "إدارة الوقت والإنتاجية",
          duration: "40 دقيقة",
          topics: [
            "تقنية Pomodoro للتركيز",
            "Time Blocking: تخصيص أوقات محددة لكل مهمة",
            "قاعدة 80/20 (Pareto Principle) للأولويات",
            "تجنب Multitasking - التركيز على مهمة واحدة",
            "أدوات الإنتاجية: Notion, Todoist, Trello",
            "Deep Work vs Shallow Work",
            "حماية وقت الإبداع من المشتتات"
          ]
        },
        {
          id: 3,
          title: "تجنب الإرهاق (Burnout)",
          duration: "30 دقيقة",
          topics: [
            "علامات الإنذار المبكر للـ Burnout",
            "أهمية الراحة والإجازات (حتى للمنفردين)",
            "Work-Life Balance للعمل من المنزل",
            "الرعاية الذاتية (Self-care) ليست رفاهية",
            "بناء نظام مستدام (Sustainable System)",
            "متى تطلب مساعدة (Outsourcing)"
          ]
        },
        {
          id: 4,
          title: "التعلم المستمر والتطوير",
          duration: "25 دقيقة",
          topics: [
            "أهمية التعلم مدى الحياة في الرقمي",
            "مصادر التعلم: كتب، بودكاست، دورات، مجتمعات",
            "تخصيص وقت أسبوعي للتعلم",
            "تطبيق ما تتعلم فوراً (Learning by Doing)",
            "الانضمام لمجتمعات رواد الأعمال (أونلاين وأوفلاين)"
          ]
        },
        {
          id: 5,
          title: "بناء شبكة علاقات (Networking)",
          duration: "30 دقيقة",
          topics: [
            "أهمية الـ Networking حتى للانطوائيين",
            "كيف تبني علاقات حقيقية (ليس سطحية)",
            "المجتمعات الأونلاين: Twitter, Reddit, Discord",
            "حضور الفعاليات والـ Meetups المحلية",
            "التعاون مع Creators آخرين",
            "Accountability Partners للتحفيز المتبادل"
          ]
        }
      ]
    }
  ];

  const progressPercentage = Math.round(
    (completedLessons.size / modules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Rocket className="w-16 h-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4">أكاديمية المنتجات الرقمية</h1>
          <p className="text-2xl mb-6 opacity-90">من الصفر إلى الاحتراف الكامل</p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-85">
            رحلة تعليمية شاملة تأخذك خطوة بخطوة من مرحلة المبتدئ المطلق إلى رائد أعمال محترف في مجال المنتجات الرقمية.
            تعلّم كيف تنشئ، تسوّق، وتبيع منتجاتك الرقمية بنجاح، وابدأ رحلتك نحو الحرية المالية والإبداعية.
          </p>

          {/* Progress Bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">تقدمك في الرحلة</span>
              <span className="text-sm font-bold">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm mt-2 opacity-75">
              {completedLessons.size} من {modules.reduce((acc, m) => acc + m.lessons.length, 0)} درس مكتمل
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
            <BookOpen className="w-10 h-10 mx-auto mb-3 text-blue-500" />
            <div className="text-3xl font-bold text-gray-800 mb-1">8</div>
            <div className="text-gray-600">محاور رئيسية</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
            <FileText className="w-10 h-10 mx-auto mb-3 text-green-500" />
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {modules.reduce((acc, m) => acc + m.lessons.length, 0)}
            </div>
            <div className="text-gray-600">درس تفصيلي</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-500">
            <Wrench className="w-10 h-10 mx-auto mb-3 text-purple-500" />
            <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
            <div className="text-gray-600">أداة وتطبيق</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
            <Target className="w-10 h-10 mx-auto mb-3 text-orange-500" />
            <div className="text-3xl font-bold text-gray-800 mb-1">100%</div>
            <div className="text-gray-600">عملي وتطبيقي</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">خريطة الرحلة التعليمية</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            كل محور يبني على السابق، لتكتسب المهارات والمعرفة بشكل تدريجي ومنظم.
            انقر على أي محور لاستكشاف الدروس والموضوعات بالتفصيل.
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedModule === module.id;
            const completedCount = module.lessons.filter(lesson =>
              completedLessons.has(`${module.id}-${lesson.id}`)
            ).length;
            const totalLessons = module.lessons.length;
            const moduleProgress = Math.round((completedCount / totalLessons) * 100);

            return (
              <div
                key={module.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Module Header */}
                <div
                  onClick={() => toggleModule(module.id)}
                  className="cursor-pointer p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className={`${module.color} rounded-xl p-4 text-white flex-shrink-0`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-gray-500">المحور {index + 1}</span>
                          {completedCount === totalLessons && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{module.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{module.description}</p>

                        {/* Module Progress */}
                        <div className="mt-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className={`${module.color} h-full rounded-full transition-all duration-500`}
                                style={{ width: `${moduleProgress}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-600 flex-shrink-0">
                              {completedCount}/{totalLessons}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module Content */}
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-6 space-y-4">
                      {module.lessons.map((lesson) => {
                        const isCompleted = completedLessons.has(`${module.id}-${lesson.id}`);

                        return (
                          <div
                            key={lesson.id}
                            className={`bg-white rounded-xl p-6 border-2 transition-all ${
                              isCompleted
                                ? 'border-green-300 bg-green-50/50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() => toggleLesson(module.id, lesson.id)}
                                className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isCompleted
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'border-gray-300 hover:border-green-500'
                                }`}
                              >
                                {isCompleted && <CheckCircle2 className="w-5 h-5" />}
                              </button>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                  <h4 className="text-xl font-bold text-gray-800">{lesson.title}</h4>
                                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium flex-shrink-0">
                                    {lesson.duration}
                                  </span>
                                </div>

                                <div className="space-y-4">
                                  {/* Topics */}
                                  <div>
                                    <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                                      المواضيع المغطاة:
                                    </h5>
                                    <ul className="space-y-1.5 mr-6">
                                      {lesson.topics.map((topic, idx) => (
                                        <li key={idx} className="text-gray-600 leading-relaxed flex items-start gap-2">
                                          <span className="text-blue-500 flex-shrink-0">•</span>
                                          <span>{topic}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Tools */}
                                  {lesson.tools && lesson.tools.length > 0 && (
                                    <div>
                                      <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Wrench className="w-4 h-4 text-purple-500" />
                                        الأدوات المستخدمة:
                                      </h5>
                                      <div className="flex flex-wrap gap-2 mr-6">
                                        {lesson.tools.map((tool, idx) => (
                                          <span
                                            key={idx}
                                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                                          >
                                            {tool}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Action Items */}
                                  {lesson.actionItems && lesson.actionItems.length > 0 && (
                                    <div>
                                      <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Target className="w-4 h-4 text-green-500" />
                                        مهام عملية:
                                      </h5>
                                      <ul className="space-y-1.5 mr-6">
                                        {lesson.actionItems.map((item, idx) => (
                                          <li key={idx} className="text-gray-600 leading-relaxed flex items-start gap-2">
                                            <span className="text-green-500 flex-shrink-0">✓</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-l from-blue-600 to-purple-700 rounded-2xl shadow-2xl p-12 text-center text-white">
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">جاهز لبدء رحلتك؟</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            لا تنتظر اللحظة المثالية، ابدأ الآن وتعلم أثناء التطبيق. النجاح يأتي بالخطوة الأولى.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              ابدأ الدرس الأول
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              حمّل خارطة الطريق PDF
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600">
          <p className="text-lg mb-2">
            &ldquo;أفضل وقت لبدء مشروعك كان قبل سنة. ثاني أفضل وقت هو الآن.&rdquo;
          </p>
          <p className="text-sm opacity-75">
            بُني بـ ❤️ لكل طموح يريد بناء مستقبله الرقمي
          </p>
        </div>
      </div>
    </div>
  );
}
