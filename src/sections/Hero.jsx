import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-persian-blue">
          Explore Our Latest Arrivals
        </p>
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Optimized For Peak Performance
          </span>
          <br />
          <span className="text-persian-blue inline-block mt-3">Nike</span>{" "}
          Football Boots
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Unleash your best game with our latest football boot arrivals –
          stylish, comfortable, and engineered for peak performance on the
          pitch. Elevate your play with quality and innovation.
        </p>

        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 pl-20 pt-40 bg-hero ">
        <img
          src={bigShoeImg}
          alt="boot collection"
          width={570}
          height={570}
          className="object-contain relative z-10"
        />

        <div className="flex xl:ml-10 sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
