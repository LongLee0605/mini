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
                {dataStatic?.Skills?.map((itemSkill, indexSkill) => {
                  return (
                    <div
                      key={indexSkill}
                      className="grid grid-cols-2 gap-4 lg:grid-cols-3"
                    >
                      {itemSkill?.left?.map((itemLeft, indexLeft) => {
                        return (
                          <div
                            key={indexLeft}
                            className="flex scale-100 flex-col rounded-2xl border-2 p-6 duration-500 hover:scale-110"
                          >
                            <div
                              style={{
                                width: "84px",
                                height: "84px",
                                position: "relative",
                                alignSelf: "center",
                              }}
                            >
                              <Image
                                src={itemLeft.src}
                                alt="Logo skill"
                                layout="fill"
                              />
                            </div>
                            <div className="mt-2 text-center">
                              <p className="text-xl font-semibold">
                                {itemLeft.content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 lg:col-6">
              {dataStatic?.Skills?.map((itemSkill, indexSkill) => {
                return (
                  <div key={indexSkill}>
                    {itemSkill?.right?.map((itemRight, indexRight) => {
                      return (
                        <div
                          key={indexRight}
                          className="mt-2 rounded-2xl border-2 p-4 first:mt-0"
                        >
                          <p className="text-xl font-semibold">
                            {itemRight.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Project */}
      <section>
        <div className="container">
          <Title>Project</Title>
          <div className="row mt-6">
            <div className="col-12">
              <div className="rounded-3xl border-2 bg-slate-400 p-8">
                <div className="rounded-2xl border-4 border-white p-10">
                  <div className="row">
                    <div className="col-12 lg:col-6">
                      {dataStatic?.Projects?.map((item, index) => {
                        return (
                          <div key={index}>
                            {item?.project?.map((itemProject, indexProject) => {
                              return (
                                <div key={indexProject}>
                                  <Title>{itemProject.title}</Title>
                                  <div className="">{itemProject.subTitle}</div>
                                  <ul>
                                    <div className="">
                                      {itemProject.titleLi}
                                    </div>
                                    {itemProject?.li?.map((itemLi, indexLi) => {
                                      return (
                                        <li
                                          className="ml-6 list-disc"
                                          key={indexLi}
                                        >
                                          {itemLi}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-12 flex justify-center lg:col-6">
                      {dataStatic?.Projects?.map((item, index) => {
                        return (
                          <div
                            style={{
                              width: "220px",
                              height: "250px",
                              position: "relative",
                              alignSelf: "center",
                            }}
                          >
                            <Image
                              src={item.src}
                              alt="Logo skill"
                              layout="fill"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
