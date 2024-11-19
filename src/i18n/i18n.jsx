import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      xin_chao: "Xin chào",
      trang_chu: "Trang chủ",
      du_an: "Dự án",
      ve_tac_gia: "Về tác giả",
      tieng_viet: "Tiếng Việt",
      tieng_anh: "Tiếng Anh",
      toi_la: "Tôi là",
      ki_nang_cua_toi: "Kĩ năng của tôi",
      xem_cv: "Xem CV",
      kinh_nghiem: "Kinh nghiệm",
      lien_he: "Liên hệ",
      ki_nang: "Kỹ năng",
      lien_he_voi_toi_qua: "Liên hệ với tôi qua",
      lien_lac: "Liên lạc",
      gioi_thieu: "Giới thiệu về tôi",
      kham_pha_kinh_nghiem_cua_toi: "Khám phá kinh nghiệm của tôi",
    },
  },
  en: {
    translation: {
      xin_chao: "Hi There",
      trang_chu: "Home",
      du_an: "Projects",
      ve_tac_gia: "About",
      tieng_viet: "Vietnamese",
      tieng_anh: "English",
      toi_la: "I'm",
      ki_nang_cua_toi: "My skills",
      xem_cv: "Get resume",
      kinh_nghiem: "Experience",
      lien_he: "Contact",
      ki_nang: "Skills",
      lien_he_voi_toi_qua: "Find me on",
      lien_lac: "Get in Touch",
      gioi_thieu: "My introduction",
      kham_pha_kinh_nghiem_cua_toi: "Explore my",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
