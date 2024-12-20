import { Fade } from "react-awesome-reveal";
import "./Experience.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";
import assets from "../../assets/img/assets";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="about">
      <div className="container">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <h2 className="section__title">{t("ve_tac_gia")}</h2>
          <span className="section__subtitle">{t("so_luoc_ve_toi")}</span>
        </Fade>
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <div className="flex items-center justify-between gap-10 lg:gap-36 lg:flex-row flex-col-reverse">
            <div className="lg:w-[65%]">
              <div className="">
                <p className="mb-4">
                  {t(
                    "xin_chao_moi_nguoi_toi_la_duy_nguyen_den_tu_thanh_pho_ho_chi_minh_viet_nam"
                  )}
                  .
                </p>
                <p className="mb-4">
                  {t("toi_hien_tai_la_lap_trinh_vien_tai_cong_ty_viethas")}.
                </p>
                <p className="mb-4">
                  {t(
                    "toi_da_tot_nghiep_bang_dai_hoc_nganh_cong_nghe_thong_tin_tai_truong_dai_thu_dau_mot"
                  )}
                  .
                </p>
                <p className="mb-4">
                  {t("ngoai_viec_lap_trinh_toi_con_co_nhung_so_thich_khac_nhu")}
                  !
                </p>
                <ul className="list-disc ml-8 mb-4">
                  <li>{t("tap_gym")}</li>
                  <li>{t("xem_tin_tuc_ve_cong_nghe")}</li>
                  <li>{t("du_lich")}</li>
                </ul>
                <p className="mb-1 text-center">
                  "Pursuing Your Dreams Is How You Become Homeless" ~.~
                </p>
                <p className="text-center">--Jimmy O Yang</p>
              </div>
            </div>
            <div className="lg:w-[35%]">
              <Player
                src="https://lottie.host/1ae419ef-b1e6-4fac-b8d5-3a16b42b4c06/h8lCjNdrom.json"
                loop
                autoplay
              />
            </div>

            <img
              src={assets.blur}
              style={{
                filter: "blur(100px)",
                position: "absolute",
                zIndex: -1,
                right: 0,
              }}
              alt=""
            />
          </div>
        </Fade>

        {/* <div className="experience__container">
          <div className="experience__frontend">
            <h2>Frontend</h2>
            <ul className="tech-list">
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>HTML</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>CSS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>JAVASCRIPT</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>TYPESCRIPT</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>REACTJS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>ANGULAR</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="experience__frontend">
            <h2>Backend</h2>
            <ul className="tech-list">
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>NODEJS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>EXPRESS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>MONGODB</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>GIT</span>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Experience;
