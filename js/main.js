// تحديد جميع الروابط داخل قائمة التنقل
const links = document.querySelectorAll("nav > ul > li > a");

// إضافة مستمع لحدث النقر على كل رابط
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط

    // تحديد عناصر الوحدات
    const unitOne = document.getElementById("unit1");
    const unitTwo = document.getElementById("unit2");
    const unitThree = document.getElementById("unit3");

    // إزالة الفئة "active" من كل الروابط ثم إضافتها إلى الرابط الحالي
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");

    // الحصول على قيمة الوحدة المرتبطة بالرابط
    let dataUnit = link.getAttribute("data-unit");

    // تحديث شفافية الوحدات استنادًا إلى الوحدة المحددة
    if (dataUnit === "1") {
      toggleOpacity(unitOne); // تبديل الشفافية للوحدة الأولى
      setOpacity(unitTwo, 0); // تعيين الشفافية للوحدة الثانية إلى صفر
      setOpacity(unitThree, 0); // تعيين الشفافية للوحدة الثالثة إلى صفر
    } else if (dataUnit === "2") {
      toggleOpacity(unitTwo); // تبديل الشفافية للوحدة الثانية
      setOpacity(unitOne, 0); // تعيين الشفافية للوحدة الأولى إلى صفر
      setOpacity(unitThree, 0); // تعيين الشفافية للوحدة الثالثة إلى صفر
    } else if (dataUnit === "3") {
      toggleOpacity(unitThree); // تبديل الشفافية للوحدة الثالثة
      setOpacity(unitOne, 0); // تعيين الشفافية للوحدة الأولى إلى صفر
      setOpacity(unitTwo, 0); // تعيين الشفافية للوحدة الثانية إلى صفر
    }
  });
});

// دالة لتبديل شفافية العنصر
function toggleOpacity(element) {
  const currentOpacity = parseFloat(getComputedStyle(element).opacity); // الحصول على قيمة الشفافية الحالية
  element.style.opacity = currentOpacity === 1 ? 0 : 1; // تبديل الشفافية بين 0 و 1
}

// دالة لتعيين قيمة شفافية محددة للعنصر
function setOpacity(element, value) {
  element.style.opacity = value; // تعيين قيمة الشفافية المحددة للعنصر
}
