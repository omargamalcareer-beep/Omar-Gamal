const catalogue = [
  {id:"bed-linen",image:"product-bed-linen.webp",en:"Bed linen & sets",ar:"مفروشات وأطقم الأسرّة",descriptionEn:"Sheets, pillowcases, duvet covers and coordinated sets.",descriptionAr:"ملاءات وأكياس وسائد وأغطية لحاف وأطقم متناسقة.",itemsEn:"Flat and fitted sheets · Pillowcases · Duvet covers · Bed sets",itemsAr:"ملاءات مسطحة ومطاطية · أكياس وسائد · أغطية لحاف · أطقم أسرّة",filter:["hotel"],icon:"M4 17V8l8-4 8 4v9M4 17h16M7 17v3m10-3v3M8 9h8v4H8z"},
  {id:"bedding",image:"product-bedding.webp",en:"Bedding & sleep",ar:"مستلزمات النوم",descriptionEn:"Comfort products and protective layers for the bed.",descriptionAr:"منتجات الراحة وطبقات الحماية للسرير.",itemsEn:"Pillows · Quilts and duvets · Toppers · Protectors · Cushions",itemsAr:"وسائد · لحف وأغطية · طبقات علوية · واقيات · وسائد ديكور",filter:["hotel","health"],icon:"M4 15c2-5 5-7 8-7s6 2 8 7M5 16h14v3H5zM7 8c.5-2 2-3 5-3s4.5 1 5 3"},
  {id:"bath",image:"product-bath-spa.webp",en:"Bath & spa",ar:"الحمّام والسبا",descriptionEn:"Textile essentials for guest bathrooms, pools and wellness spaces.",descriptionAr:"مستلزمات منسوجات لحمّامات الضيوف والمسابح ومساحات العافية.",itemsEn:"Bath and hand towels · Bathrobes · Bath mats · Pool and spa towels",itemsAr:"مناشف حمّام ويد · أردية حمّام · دواسات · مناشف مسبح وسبا",filter:["hotel","health"],icon:"M7 5h10l1 15H6L7 5zm2 0a3 3 0 0 1 6 0M9 10v1m3-1v1m3-1v1"},
  {id:"mattresses",image:"product-mattresses-beds.webp",en:"Mattresses & beds",ar:"المراتب والأسرة",descriptionEn:"Sleep and bed-base options for hospitality and project inquiries.",descriptionAr:"خيارات للنوم وقواعد الأسرّة لاستفسارات الضيافة والمشروعات.",itemsEn:"Mattresses · Bases · Adjustable bases · Headboards",itemsAr:"مراتب · قواعد أسرّة · قواعد متحركة · ألواح رأس السرير",filter:["hotel"],icon:"M3 18V8h3a3 3 0 0 1 3 3v1h9a3 3 0 0 1 3 3v3M3 14h18M5 18v2m14-2v2"},
  {id:"dining",image:"product-dining-kitchen.webp",en:"Dining & kitchen",ar:"المائدة والمطبخ",descriptionEn:"Textile pieces for restaurants, catering and food service.",descriptionAr:"منسوجات للمطاعم وخدمات الطعام والضيافة.",itemsEn:"Tablecloths · Runners · Napkins · Chair covers · Kitchen towels · Aprons",itemsAr:"مفارش طاولات · ممرات · مناديل · أغطية كراسٍ · مناشف مطبخ · مآزر",filter:["dining","hotel"],icon:"M4 5h16v11H4zM2 19h20M8 16v3m8-3v3M8 8h8"},
  {id:"healthcare",image:"product-healthcare.webp",en:"Healthcare textiles",ar:"منسوجات الرعاية الصحية",descriptionEn:"Textile categories for hospitals and healthcare environments.",descriptionAr:"فئات منسوجات للمستشفيات وبيئات الرعاية الصحية.",itemsEn:"Hospital bed linen · Patient gowns · Scrubs · Lab coats · Privacy curtains",itemsAr:"مفروشات أسرّة المستشفيات · أردية المرضى · ملابس طبية · معاطف مختبر · ستائر خصوصية",filter:["health"],icon:"M12 4v16M4 12h16M7 7h10v10H7z"},
  {id:"uniforms",image:"product-uniforms.webp",en:"Uniforms & workwear",ar:"الزي الرسمي وملابس العمل",descriptionEn:"Uniform categories for hospitality, food service and care teams.",descriptionAr:"فئات زيّ لفرق الضيافة وخدمات الطعام والرعاية.",itemsEn:"Hospitality · Housekeeping · Restaurant · Healthcare",itemsAr:"الضيافة · التدبير الفندقي · المطاعم · الرعاية الصحية",filter:["dining","health","hotel"],icon:"M8 5a4 4 0 0 1 8 0l4 2-2 5-2-1v9H6v-9l-2 1-2-5 4-2zM8 5c0 2 1.5 3 4 3s4-1 4-3"},
  {id:"curtains",image:"product-curtains.webp",en:"Curtains & furnishings",ar:"الستائر والتأثيث",descriptionEn:"Soft furnishings that help complete rooms and shared spaces.",descriptionAr:"مفروشات ناعمة تساعد على استكمال الغرف والمساحات المشتركة.",itemsEn:"Blackout and sheer curtains · Shower curtains · Cushion and sofa covers",itemsAr:"ستائر معتمة وخفيفة · ستائر حمّام · أغطية وسائد وأرائك",filter:["hotel","health"],icon:"M5 4h14v16H5zM9 4v16m6-16v16M5 9h14"},
  {id:"housekeeping",image:"product-housekeeping.webp",en:"Housekeeping & laundry",ar:"التدبير الفندقي والغسيل",descriptionEn:"Useful textile supplies for everyday property operations.",descriptionAr:"مستلزمات منسوجات عملية لتشغيل المنشآت يومياً.",itemsEn:"Laundry bags · Cleaning cloths · Housekeeping textiles",itemsAr:"أكياس غسيل · أقمشة تنظيف · منسوجات التدبير الفندقي",filter:["hotel","health","dining"],icon:"M4 7h16l-1 13H5L4 7zm4 0V5h8v2M8 11h8m-7 3h6"},
  {id:"bean-bags",image:"product-beanbags.webp",en:"Bean bags & leisure",ar:"أكياس الجلوس والترفيه",descriptionEn:"Casual soft seating for selected hospitality and leisure spaces.",descriptionAr:"مقاعد لينة غير رسمية لمساحات ضيافة وترفيه مختارة.",itemsEn:"Bean bags · Soft seating",itemsAr:"أكياس جلوس · مقاعد لينة",filter:["hotel"],icon:"M7 8c1-3 9-3 10 0l2 9c.5 3-15 3-14 0l2-9zm2-1V5m6 2V5"}
];
const productsByCategory = {
  "bed-linen": [["Flat sheets","ملاءات مسطحة"],["Fitted sheets","ملاءات مطاطية"],["Pillowcases","أكياس وسائد"],["Duvet covers","أغطية لحاف"],["Quilt covers","أغطية ألحفة"],["Bedspreads","مفارش أسرّة"],["Bed runners","ممرات أسرّة"],["Bed skirts","تنورات أسرّة"],["Mattress covers","أغطية مراتب"]],
  "bedding": [["Pillows","وسائد"],["Decorative cushions","وسائد ديكور"],["Duvets","ألحفة"],["Comforters","أغطية مبطنة"],["Quilts","لحف"],["Blankets","بطانيات"],["Throws","أغطية خفيفة"],["Mattress toppers","طبقات علوية للمراتب"],["Mattress protectors","واقيات مراتب"],["Pillow protectors","واقيات وسائد"]],
  "bath": [["Bath towels","مناشف حمّام"],["Hand towels","مناشف يد"],["Face towels","مناشف وجه"],["Bath sheets","مناشف حمّام كبيرة"],["Bath mats","دواسات حمّام"],["Pool towels","مناشف مسبح"],["Spa towels","مناشف سبا"],["Bathrobes","أردية حمّام"],["Terry slippers","نعال تيري"]],
  "mattresses": [["Mattresses","مراتب"],["Mattress bases","قواعد مراتب"],["Adjustable bases","قواعد متحركة"],["Headboards","ألواح رأس السرير"]],
  "dining": [["Tablecloths","مفارش طاولات"],["Table runners","ممرات طاولات"],["Napkins","مناديل قماش"],["Buffet cloths","مفارش بوفيه"],["Chair covers","أغطية كراسٍ"],["Kitchen towels","مناشف مطبخ"],["Aprons","مآزر"]],
  "healthcare": [["Hospital bed sheets","ملاءات أسرّة مستشفيات"],["Hospital pillowcases","أكياس وسائد للمستشفيات"],["Hospital blankets","بطانيات مستشفيات"],["Patient gowns","أردية مرضى"],["Surgical gowns","أردية جراحية"],["Scrub suits","ملابس طبية"],["Lab coats","معاطف مختبر"],["Medical curtains","ستائر طبية"],["Patient bed covers","أغطية أسرّة المرضى"]],
  "uniforms": [["Hospitality uniforms","زي الضيافة"],["Restaurant uniforms","زي المطاعم"],["Housekeeping uniforms","زي التدبير الفندقي"],["Healthcare uniforms","زي الرعاية الصحية"]],
  "curtains": [["Blackout curtains","ستائر معتمة"],["Sheer curtains","ستائر شفافة"],["Decorative curtains","ستائر ديكورية"],["Shower curtains","ستائر حمّام"],["Curtain fabrics","أقمشة ستائر"]],
  "housekeeping": [["Laundry bags","أكياس غسيل"],["Housekeeping cloths","أقمشة تدبير فندقي"],["Cleaning textiles","منسوجات تنظيف"],["Dusters","منفضات غبار"],["Sofa covers","أغطية أرائك"],["Cushion covers","أغطية وسائد"]],
  "bean-bags": [["Bean bags","أكياس جلوس"]]
};

const productPhotoSheets = {
  "bed-linen": {file:"products-bed-linen-sheet.jpg",columns:3,rows:3},
  "bedding": {file:"products-bedding-sheet.jpg",columns:4,rows:3},
  "bath": {file:"products-bath-sheet.jpg",columns:3,rows:3},
  "mattresses": {file:"products-mattresses-sheet.jpg",columns:3,rows:3},
  "dining": {file:"products-dining-sheet.jpg",columns:3,rows:3},
  "healthcare": {file:"products-healthcare-sheet.jpg",columns:3,rows:3},
  "uniforms": {file:"products-uniforms-sheet.jpg",columns:3,rows:2},
  "curtains": {file:"products-curtains-sheet.jpg",columns:3,rows:2},
  "housekeeping": {file:"products-housekeeping-sheet.jpg",columns:3,rows:2},
  "bean-bags": {file:"products-beanbags.jpg",columns:1,rows:1}
};

let language = "en";
let currentCategory = null;
const grid = document.querySelector("#product-grid");
const getText = (entry, key) => key === "en" ? entry[language] : entry[`${key}${language === "en" ? "En" : "Ar"}`];
function renderProducts(filter = "all") {
  const items = catalogue.filter(item => filter === "all" || item.filter.includes(filter));
  grid.innerHTML = items.map((item,index) => `
    <article class="product-card">
      <a class="category-open" href="#category/${item.id}" data-category="${item.id}">
        <div class="category-art"><img src="assets/images/${item.image}" alt="${getText(item,"en")}" loading="lazy" decoding="async"><span class="image-index">${String(catalogue.indexOf(item)+1).padStart(2,"0")}</span></div>
        <div class="product-card-copy">
          <h3>${getText(item,"en")}</h3>
          <p>${getText(item,"description")}</p>
          <div class="card-contents">${getText(item,"items")}</div>
          <span class="card-action"><span>${language === "en" ? "View products" : "عرض المنتجات"}</span><span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>`).join("");
  grid.querySelectorAll("[data-category]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openCategory(link.dataset.category,true);
  }));
}
function renderCategoryProducts(category) {
  if (!category) return;
  currentCategory=category;
  const items=productsByCategory[category.id] || [];
  const sheet=productPhotoSheets[category.id] || {file:category.image,columns:1,rows:1};
  document.querySelector("#category-title").textContent=getText(category,"en");
  document.querySelector("#category-description").textContent=getText(category,"description");
  document.querySelector("#category-products").innerHTML=items.map(([en,ar],index)=>`
    <article class="product-list-card">
      <div class="product-list-photo" role="img" aria-label="${language === "en" ? en : ar}" style="background-image:url('assets/images/${sheet.file}');background-size:${sheet.columns*100}% ${sheet.rows*100}%;background-position:${sheet.columns===1?50:((index%sheet.columns)/(sheet.columns-1))*100}% ${sheet.rows===1?50:(Math.floor(index/sheet.columns)/(sheet.rows-1))*100}%"><span class="product-photo-index">${String(index+1).padStart(2,"0")}</span></div>
      <div class="product-list-copy"><h4>${language === "en" ? en : ar}</h4><button class="button product-inquiry" type="button" data-product="${language === "en" ? en : ar}"><span>${language === "en" ? "Ask about this product" : "استفسر عن هذا المنتج"}</span><span aria-hidden="true">↗</span></button></div>
    </article>`).join("");
  document.querySelectorAll(".product-inquiry").forEach(button=>button.addEventListener("click",()=>{
    const categoryName=getText(category,"en");
    document.querySelector("#quote-products").value=`${button.dataset.product} (${categoryName})`;
    document.querySelector("#quote").scrollIntoView({behavior:"smooth",block:"start"});
  }));
}
function showCategoryView(category) {
  document.querySelector("#catalogue-heading").hidden=true;
  document.querySelector("#catalogue-filters").hidden=true;
  grid.hidden=true;
  document.querySelector("#catalogue-note").hidden=true;
  document.querySelector("#category-detail").hidden=false;
  renderCategoryProducts(category);
  document.querySelector("#products").scrollIntoView({behavior:"smooth",block:"start"});
}
function showCatalogueView() {
  currentCategory=null;
  document.querySelector("#category-detail").hidden=true;
  document.querySelector("#catalogue-heading").hidden=false;
  document.querySelector("#catalogue-filters").hidden=false;
  document.querySelector("#catalogue-note").hidden=false;
  grid.hidden=false;
  renderProducts(document.querySelector(".filter-chip.is-active")?.dataset.filter || "all");
}
function openCategory(id,addHistory=false) {
  const category=catalogue.find(item=>item.id===id);
  if (!category) return;
  if (addHistory && location.hash !== `#category/${id}`) location.hash = `#category/${id}`;
  showCategoryView(category);
}
function syncCategoryRoute() {
  const match=location.hash.match(/^#category\/([a-z-]+)$/);
  if (match) openCategory(match[1],false);
  else if (currentCategory) showCatalogueView();
}
window.addEventListener("popstate",syncCategoryRoute);
window.addEventListener("hashchange",syncCategoryRoute);
document.querySelector("#category-back").addEventListener("click",()=>{
  if (location.hash !== "#products") location.hash = "#products";
  showCatalogueView();
  document.querySelector("#products").scrollIntoView({behavior:"smooth",block:"start"});
});
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-ar", next === "ar");
  document.querySelectorAll("[data-en][data-ar]").forEach(node => node.textContent = node.dataset[next]);
  document.querySelectorAll("[data-en-placeholder][data-ar-placeholder]").forEach(node => node.placeholder = node.dataset[`${next}Placeholder`]);
  document.querySelector(".language-toggle").textContent = next === "en" ? "العربية" : "English";
  document.querySelector(".language-toggle").setAttribute("aria-label", next === "en" ? "Switch to Arabic" : "Switch to English");
  document.querySelector(".menu-toggle").setAttribute("aria-label", next === "en" ? "Open menu" : "فتح القائمة");
  document.title = next === "en" ? "Ditharna | Hospitality Textiles & Supplies" : "دِثارنا | منسوجات ومستلزمات الضيافة";
  document.querySelectorAll(".filter-chip").forEach(button => button.classList.toggle("is-active", button.dataset.filter === (document.querySelector(".filter-chip.is-active")?.dataset.filter || "all")));
  if (currentCategory) renderCategoryProducts(currentCategory);
  else renderProducts(document.querySelector(".filter-chip.is-active")?.dataset.filter || "all");
}
document.querySelector(".language-toggle").addEventListener("click", () => setLanguage(language === "en" ? "ar" : "en"));
document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("is-active"));
  button.classList.add("is-active");
  renderProducts(button.dataset.filter);
}));
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? (language === "en" ? "Close menu" : "إغلاق القائمة") : (language === "en" ? "Open menu" : "فتح القائمة"));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open"); menuButton.setAttribute("aria-expanded","false");
}));
document.querySelector("#quote-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const labels = language === "en"
    ? {title:"Ditharna business inquiry",name:"Name",company:"Company",contact:"Email or phone",industry:"Industry",products:"Products",quantity:"Estimated quantity",location:"Project location",details:"Details"}
    : {title:"استفسار تجاري لدِثارنا",name:"الاسم",company:"الشركة",contact:"البريد أو الهاتف",industry:"القطاع",products:"المنتجات",quantity:"الكمية التقديرية",location:"موقع المشروع",details:"التفاصيل"};
  const message = [labels.title,...Object.entries(labels).slice(1).map(([key,label]) => {
    const value = String(form.get(key) || "").trim();
    return value ? `${label}: ${value}` : "";
  }).filter(Boolean)].join("\n");
  const url = `https://wa.me/201093004306?text=${encodeURIComponent(message)}`;
  window.open(url,"_blank","noopener,noreferrer");
  const note = document.querySelector("#form-note");
  note.textContent = language === "en"
    ? "WhatsApp has opened with your message prepared. Review it there and press Send to reach Ditharna."
    : "فُتح واتساب والرسالة جاهزة. راجعها واضغط إرسال للتواصل مع دِثارنا.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
syncCategoryRoute();


