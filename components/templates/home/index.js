import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";

const HomeTemplate = ({ dataStatic }) => {
  return (
    <>
      {/* Banner */}
      <section className="animate-[gradientAnimation_5s_ease_infinite] bg-bbc-gradient-11 bg-[length:180%_180%] pb-0">
        <div className="relative h-[300px] ">
          <div className="container">
            <div className="row">
              <div className="col-12 lg:col-4">
                <Title>Xin chào</Title>
                <b>Đây là test</b>
                <p>Phần giới thiệu</p>
              </div>
              <div className="col-12 bg-gray-400 lg:col-8">
                <div className=""></div>
              </div>
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 h-[96px] bg-[url('/assets/images/wave.svg')]"></div>
        </div>
      </section>
      {/* Story */}
      <section>
        <div className="container">
          <Title>Story</Title>
          <div className="mt-4">
            {dataStatic?.Storys?.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className="mb-5 rounded-2xl px-4 py-6"
                    style={{ boxShadow: "rgb(181 181 181 / 0.75) 0 16px 40px" }}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Interests */}
      <section>
        <div className="container">
          <Title>Interests</Title>
        </div>
      </section>
      {/* Skill */}
      <section>
        <div className="container">
          <Title>Skill</Title>
          <div className="row mt-6">
            <div className="col-12 lg:col-6">
              <div className="row">
                <div className="grid grid-cols-3 gap-4">
                  {dataStatic?.Skills?.map((itemSkill, indexSkill) => {
                    return (
                      <div key={indexSkill} className="mx-auto">
                        <div className="scale-100 rounded-2xl border-2 p-6 duration-500 hover:scale-110">
                          <div
                            style={{
                              width: "84px",
                              height: "84px",
                              position: "relative",
                              alignSelf: "center",
                            }}
                          >
                            <Image
                              src={itemSkill.src}
                              alt="Logo skill"
                              layout="fill"
                            />
                          </div>
                          <div className="mt-2 text-center">
                            <p className="text-xl font-semibold">
                              {itemSkill.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 bg-slate-100 lg:col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
