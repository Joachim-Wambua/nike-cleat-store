import Button from "../components/Button";
import { shoe7 } from "../assets/images";

const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You The
            <br />
            <span className="text-persian-blue inline-block mt-3">Best </span>{" "}
            <span className="text-persian-blue inline-block mt-3">Quality </span>{" "}
            Football Boots
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort, style and great pitch performace. Our
            meticulously engineered football boots are designed to elevate your
            experience and on-pitch performance, providing you with unmatched
            quality, innovation and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our commitment to detail & excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe7}
            alt="shoe7"
            width={570}
            height={570}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
