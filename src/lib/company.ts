const addressQuery = encodeURIComponent(
  "95/679 หมู่ 10 ตำบลบางแม่นาง อำเภอบางใหญ่ นนทบุรี 11140"
);

// Canonical public URL. Standardized on the email domain (…solutions.com);
// the old metadataBase used a typo'd host missing the trailing "s".
export const siteUrl = "https://knttechsolutions.com";

export const company = {
  nameEn: "KNT TECHNOLOGY CO., LTD.",
  nameTh: "บริษัท เคเอ็นที เทคโนโลยี จำกัด",
  legalName: "KNT Technology Co., Ltd.",
  url: siteUrl,
  email: "utarat.k@knttechsolutions.com",
  phone: "092-896-4619",
  phoneRaw: "+66928964619",
  github: "https://github.com/knt-tech",
  address: {
    th: {
      line1: "95/679 หมู่ที่ 10 ตำบลบางแม่นาง",
      line2: "อำเภอบางใหญ่ จังหวัดนนทบุรี 11140",
    },
    en: {
      line1: "95/679 Moo 10, Bang Mae Nang",
      line2: "Bang Yai, Nonthaburi 11140, Thailand",
    },
  },
  // Structured postal address used for LocalBusiness schema.
  postalAddress: {
    streetAddress: "95/679 Moo 10, Bang Mae Nang",
    addressLocality: "Bang Yai",
    addressRegion: "Nonthaburi",
    postalCode: "11140",
    addressCountry: "TH",
  },
  map: {
    embedUrl: `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`,
    viewUrl: `https://www.google.com/maps/search/?api=1&query=${addressQuery}`,
  },
} as const;
