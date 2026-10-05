export const SITE = {
  name: "محمود إسماعيل شلتوت",
  title: "المهندس/ محمود إسماعيل شلتوت",
  phone: "+966594756878",
  phoneDisplay: "+966 59 475 6878",
  whatsapp: "966594756878",
  email: "Mahmoudshaltoot.cemc@gmail.com",
};

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type Course = {
  id: string;
  level: string;
  tag: string;
  tagTone: "primary" | "accent";
  title: string;
  desc: string;
  duration: string;
  mode: string;
  topics: string[];
};

export const COURSES: Course[] = [
  {
    id: "fundamentals",
    level: "LEVEL 01",
    tag: "مباشر",
    tagTone: "primary",
    title: "أساسيات الكيمياء النووية",
    desc: "من الذرة والنظائر إلى أنواع الاضمحلال — نقطة البداية لأي طالب يدخل المجال.",
    duration: "٨ أسابيع",
    mode: "أونلاين مباشر",
    topics: ["بنية النواة وطاقة الربط", "النظائر واستقرارها", "اضمحلال ألفا وبيتا وجاما", "عمر النصف وحسابات النشاط"],
  },
  {
    id: "reactors",
    level: "LEVEL 02",
    tag: "مكثّف",
    tagTone: "accent",
    title: "التفاعلات النووية والمفاعلات",
    desc: "الانشطار والاندماج، تصميم المفاعلات، ودورة الوقود — مع تمارين تطبيقية.",
    duration: "٦ أسابيع",
    mode: "أونلاين مباشر",
    topics: ["الانشطار والاندماج", "أنواع المفاعلات", "دورة الوقود النووي", "مسائل تطبيقية"],
  },
  {
    id: "safety",
    level: "LEVEL 03",
    tag: "متقدم",
    tagTone: "primary",
    title: "السلامة الإشعاعية والنظائر",
    desc: "إدارة المخاطر الإشعاعية، قياس النشاط، والتطبيقات الطبية والصناعية.",
    duration: "٤ أسابيع",
    mode: "أونلاين / حضوري",
    topics: ["وحدات الجرعة والقياس", "مبادئ الحماية الإشعاعية", "النظائر في الطب والصناعة", "إدارة النفايات المشعة"],
  },
];
