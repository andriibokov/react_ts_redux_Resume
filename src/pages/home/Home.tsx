import React, { FC } from "react";
import { dataType } from "../../types/data";


const Home: FC<dataType> = ({ data }) => {
  return (
    <main className="font-mono container mb-10">
      <div className="flex gap-8 justify-between">
        <div>
          <p className="leading-none my-3 text-[#fbed9a] text-[82px] font-bold">
            <span className="text-[#60dfe2] text-[82px] font-bold">&#60;</span>
            CV
            <span className="text-[#60dfe2] text-[82px] font-bold">&#62;</span>
          </p>
          <div>
            <p className="leading-none text-[32px]">{data?.name?.value}</p>
            <p className="leading-none text-[22px]">
              ({data?.name?.specialty})
            </p>
          </div>
          <div className="mt-8">
            {data?.date?.label}
            {data?.date?.value}
          </div>
          <div>
            {data?.married?.label}
            {data?.married?.value}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-3 text-[28px] text-[#dd8888]">
            <span className="text-[#60dfe2] text-[28px] font-bold">/</span>
            {data?.skills?.title}
          </h2>
          <ul>
            {data?.skills?.list?.map((item: any, index: number) => {
              return (
                <li className="my-2" key={index}>
                  <h3>{item}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="mt-16">
          <h2 className="mb-3 text-[28px] text-[#dd8888]">
            <span className="text-[#60dfe2] text-[28px] font-bold">/</span>
            {data?.experience?.title}
          </h2>
          <ul>
            {data?.experience?.list.map((item: any, index: number) => {
              return (
                <li className="my-8 " key={index}>
                  <h3 className="my-3 flex justify-between	">
                    <p className="text-[#dd8888] text-[18px]">
                      {item?.label?.name}
                    </p>
                    <p className="ml-2 text-[#f5f5a4]">{item?.label?.time}</p>
                  </h3>
                  <ul className="flex flex-col">
                    {item?.text?.map((el: any, ind: number) => {
                      return (
                        <li className="my-2" key={ind}>
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="mb-3 text-[28px] text-[#dd8888]">
            <span className="text-[#60dfe2] text-[28px] font-bold">/</span>
            {data?.education?.title}
          </h2>
          <h2 className="my-3"></h2>
          <ul>
            {data?.education?.list?.map((item: any, index: number) => {
              return (
                <li className="my-4" key={index}>
                  <h3 className="text-[18px] text-[#c17f7f]">{item?.label}</h3>
                  <ul>
                    {item?.list?.map((el: any, index: number) => {
                      return (
                        <li className="my-2" key={index}>
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;