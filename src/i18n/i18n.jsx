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
      kham_pha_kinh_nghiem_cua_toi: "Kinh nghiệm của tôi",
      thang_1_2023_den_thang_8_2023: "Tháng 1/2023 - 8/2023",
      thang_8_2023_den_nay: "Tháng 8/2023 đến nay",
      du_an_tu_lam: "Dự án tự làm",
      hoc_kien_thuc_moi_moi_ngay: "Học kiến thức mới mỗi ngày",
      du_an_auto_web_cong_ty_viethas: "Dự án Auto Web công ty Viethas",
      lap_trinh_angular_xay_dung_du_an_autoweb:
        "Lập trình Angular xây dựng dự án AutoWeb",
      xin_chao_moi_nguoi_toi_la_duy_nguyen_den_tu_thanh_pho_ho_chi_minh_viet_nam:
        "Xin chào mọi người, tôi là Duy Nguyễn đến từ thành phố Hồ Chí Minh, Việt Nam",
      toi_hien_tai_la_lap_trinh_vien_tai_cong_ty_viethas:
        "Tôi hiện tại là lập trình viên tại công ty Viethas",
      toi_da_tot_nghiep_bang_dai_hoc_nganh_cong_nghe_thong_tin_tai_truong_dai_thu_dau_mot:
        "Tôi đã tốt nghiệp bằng đại học ngành Công nghệ thông tin tại Trường Đại học Thủ Dầu Một",
      ngoai_viec_lap_trinh_toi_con_co_nhung_so_thich_khac_nhu:
        "Ngoài việc lập trình, tôi còn có những sở thích khác như",
      tap_gym: "Tập gym",
      xem_tin_tuc_ve_cong_nghe: "Xem tin tức về công nghệ",
      du_lich: "Du lịch",
      so_luoc_ve_toi: "Sơ lược về tôi",
      nhung_du_an_toi_da_lam: "Những dự án tôi đã làm",
      xem_demo: "Xem demo",
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
      thang_1_2023_den_thang_8_2023: "January 2023 - August 2023",
      thang_8_2023_den_nay: "August 2023 - Present",
      du_an_tu_lam: "Personal projects",
      hoc_kien_thuc_moi_moi_ngay: "Learning new things every day",
      du_an_auto_web_cong_ty_viethas: "Auto Web project at Viethas",
      lap_trinh_angular_xay_dung_du_an_autoweb: "Angular programming",
      xin_chao_moi_nguoi_toi_la_duy_nguyen_den_tu_thanh_pho_ho_chi_minh_viet_nam:
        "Hello everyone, I'm Duy Nguyen from Ho Chi Minh City, Vietnam",
      toi_hien_tai_la_lap_trinh_vien_tai_cong_ty_viethas:
        "I'm currently a programmer at Viethas",
      toi_da_tot_nghiep_bang_dai_hoc_nganh_cong_nghe_thong_tin_tai_truong_dai_thu_dau_mot:
        "I have completed a Bachelor's degree in Information Technology at Thu Dau Mot University",
      ngoai_viec_lap_trinh_toi_con_co_nhung_so_thich_khac_nhu:
        "Besides programming, I have other hobbies such as",
      tap_gym: "Gym",
      xem_tin_tuc_ve_cong_nghe: "Reading tech blogs",
      du_lich: "Traveling",
      so_luoc_ve_toi: "About me",
      nhung_du_an_toi_da_lam: "Projects I've worked on",
      xem_demo: "Live Demo",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
